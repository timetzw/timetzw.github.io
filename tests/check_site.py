"""Check the generated personal site: python3 tests/check_site.py [build directory]."""
import json
import sys
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit

root = Path(sys.argv[1] if len(sys.argv) > 1 else '_site')

class Page(HTMLParser):
    def __init__(self, path):
        super().__init__()
        self.tags = []
        self.feed(path.read_text())
    def handle_starttag(self, tag, attrs):
        self.tags.append((tag, dict(attrs)))

for route in ['', 'research', 'news']:
    path = root / route / 'index.html'
    content = path.read_text()
    page = Page(path)
    assert len([1 for tag, _ in page.tags if tag == 'h1']) == 1, route
    canonical = [a['href'] for t, a in page.tags if t == 'link' and a.get('rel') == 'canonical']
    assert canonical == ['https://timetzw.github.io/' + (route + '/' if route else '')], canonical
    assert 'Albert Einstein' not in content
    import re
    for block in re.findall(r'<script type="application/ld\+json">(.*?)</script>', content, re.S):
        data = json.loads(block)
        assert data['@graph'][0]['name'] == 'Zhengwei Tong'
    for tag, attrs in page.tags:
        for key in ['href', 'src']:
            url = urlsplit(attrs.get(key, ''))
            if not url.path or url.scheme or url.netloc:
                continue
            target = root / unquote(url.path).lstrip('/') if url.path.startswith('/') else path.parent / unquote(url.path)
            if url.path.endswith('/'):
                target /= 'index.html'
            assert target.exists(), (route, attrs.get(key))
    for tag, attrs in page.tags:
        if tag == 'button' and attrs.get('aria-controls', '').startswith('abstract-'):
            assert any(a.get('id') == attrs['aria-controls'] and 'hidden' in a for _, a in page.tags)

for route in ['cv', 'teaching', 'people', 'projects', 'repositories', 'books', 'blog', '_pages/dropdown']:
    assert not (root / route / 'index.html').exists(), route
    assert f'/{route}/' not in (root / 'sitemap.xml').read_text(), route
assert not (root / 'assets/pdf/example_pdf.pdf').exists()
assert not (root / 'assets/json/resume.json').exists()
search = (root / 'assets/js/search-data.js').read_text()
assert 'Google Gemini' not in search and 'Displaying External Posts' not in search
assert 'Dataset' in (root / 'research/index.html').read_text()
assert 'Zhengwei Tong | Computer Science PhD Candidate at Duke University' in (root / 'index.html').read_text()
print('Site checks passed: metadata, identity, internal resources, disclosures, dataset, and demo removal.')

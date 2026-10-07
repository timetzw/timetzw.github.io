---
layout: page
permalink: /talks/
title: Talks
description: Recordings of my research talks.
nav: false
sitemap: false
---

{% assign talks_by_year = site.data.talks | group_by: 'year' | sort: 'name' | reverse %}
{% for year in talks_by_year %}

<h2>{{ year.name }}</h2>
{% for talk in year.items %}
<section class="mb-5">
  <h3><a href="{{ talk.permalink | relative_url }}">{{ talk.title | escape }}</a></h3>
  <p>{{ talk.venue | escape }}</p>
  {% include talk-recording.liquid talk=talk %}
</section>
{% endfor %}
{% endfor %}

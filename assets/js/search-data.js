// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "Research",
          description: "Publications by Zhengwei Tong in cryptography, decentralized systems, AI evaluation, and optimization.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "news-i-ve-started-my-student-researcher-internship-at-solana-foundation",
          title: "I’ve started my Student Researcher internship at Solana Foundation.",
          description: "",
          section: "News",
            handler: () => {
              window.location.href = "/news/";
            },
        },{id: "news-we-presented-our-hackathon-project-persisting-private-bittorrent-trackers-with-tees-at-the-ic3-blockchain-summer-camp-2025-with-françois-xavier-wicht-aviv-yaish-hang-yin-and-andrew-miller",
          title: "We presented our hackathon project Persisting Private BitTorrent Trackers with TEEs at the IC3 Blockchain Summer Camp 2025 with François-Xavier...",
          description: "",
          section: "News",
            handler: () => {
              window.location.href = "/news/";
            },
        },{id: "news-i-presented-privacy-preserving-inclusion-lists-at-taps-at-ncsu",
          title: "I presented Privacy-Preserving Inclusion Lists at TAPS at NCSU.",
          description: "",
          section: "News",
            handler: () => {
              window.location.href = "/news/";
            },
        },{id: "news-our-paper-persistent-bittorrent-trackers-has-been-accepted-at-ieee-euro-s-amp-amp-p-2026",
          title: "Our paper Persistent BitTorrent Trackers has been accepted at IEEE Euro S\u0026P 2026.",
          description: "",
          section: "News",
            handler: () => {
              window.location.href = "/news/";
            },
        },{id: "news-i-passed-my-preliminary-exam-and-am-now-a-phd-candidate",
          title: "I passed my preliminary exam and am now a PhD candidate!",
          description: "",
          section: "News",
            handler: () => {
              window.location.href = "/news/";
            },
        },{id: "news-our-paper-persistent-bittorrent-trackers-has-also-been-accepted-at-sbc-2026",
          title: "Our paper Persistent BitTorrent Trackers has also been accepted at SBC 2026!",
          description: "",
          section: "News",
            handler: () => {
              window.location.href = "/news/";
            },
        },{id: "news-i-presented-our-work-persistent-bittorrent-trackers-at-the-ic3-blockchain-summer-camp-2026",
          title: "I presented our work Persistent BitTorrent Trackers at the IC3 Blockchain Summer Camp 2026.",
          description: "",
          section: "News",
            handler: () => {
              window.location.href = "/news/";
            },
        },{id: "news-i-attended-the-casa-summer-school-2026-on-cryptography-and-distributed-computing-in-bochum-germany",
          title: "I attended the CASA Summer School 2026 on Cryptography and Distributed Computing in Bochum, Germany.",
          description: "",
          section: "News",
            handler: () => {
              window.location.href = "/news/";
            },
        },{id: "news-our-paper-privacy-preserving-inclusion-lists-has-been-accepted-at-aft-2026",
          title: "Our paper Privacy-Preserving Inclusion Lists has been accepted at AFT 2026!",
          description: "",
          section: "News",
            handler: () => {
              window.location.href = "/news/";
            },
        },{id: "news-i-ve-started-my-internship-at-nethermind",
          title: "I’ve started my internship at Nethermind.",
          description: "",
          section: "News",
            handler: () => {
              window.location.href = "/news/";
            },
        },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%7A%68%65%6E%67%77%65%69.%74%6F%6E%67@%64%75%6B%65.%65%64%75", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/zhengwei-tong", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0006-9724-0837", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=E6fSNGUAAAAJ", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/Zhengwei_Tong", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];

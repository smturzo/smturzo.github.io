// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "peer-reviewed articles and preprints, in reverse chronological order",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-research",
          title: "research",
          description: "what I work on, and why",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "open-source code and tools",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "education, experience, skills, and service",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-the-masala-software-suite-preprint-is-out-on-biorxiv-a-modern-modular-c-foundation-for-heteropolymer-design",
          title: 'The Masala software suite preprint is out on bioRxiv — a modern, modular...',
          description: "",
          section: "News",},{id: "news-presented-a-poster-on-hinge-proteins-with-constrained-motion-at-the-gordon-research-conference-on-protein-folding-and-dynamics",
          title: 'Presented a poster on hinge proteins with constrained motion at the Gordon Research...',
          description: "",
          section: "News",},{id: "news-our-paper-on-agentrosetta-an-llm-agent-for-physics-based-protein-design-was-accepted-at-icml-2026",
          title: 'Our paper on AgentRosetta — an LLM agent for physics-based protein design —...',
          description: "",
          section: "News",},{id: "news-started-as-principal-research-scientist-at-gsk-working-on-foundation-models-for-antibody-discovery",
          title: 'Started as Principal Research Scientist at GSK, working on foundation models for antibody...',
          description: "",
          section: "News",},{id: "projects-foundation-models-for-antibody-discovery",
          title: 'foundation models for antibody discovery',
          description: "benchmarking and building AI models for therapeutic antibody design",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_antibody_foundation_models/";
            },},{id: "projects-quantum-chemistry-for-molecular-design",
          title: 'quantum chemistry for molecular design',
          description: "pushing physics-based scoring past the limits of classical force fields",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_quantum_chemistry/";
            },},{id: "projects-agentrosetta",
          title: 'AgentRosetta',
          description: "an LLM agent that drives Rosetta for protein design",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_agentrosetta/";
            },},{id: "projects-sparse-experimental-data-in-structure-prediction",
          title: 'sparse experimental data in structure prediction',
          description: "PARCS, ROSIE-PARCS, and ion mobility mass spectrometry",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_sparse_data/";
            },},{id: "projects-masala",
          title: 'Masala',
          description: "modern, modular, GPU-aware scientific software for design",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_masala/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%73%6D%62%61%72%67%65%65%6E@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/smturzo", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/smbargeen", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
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

// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';

const organizationName = 'john-2106';
const projectName = 'KORA-ULTIMATE';
const editUrl = `https://github.com/${organizationName}/${projectName}/tree/main/docs-site/`;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'KORA ONE',
  tagline: 'Assistant média intelligent — documentation technique',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: `https://${organizationName}.github.io`,
  baseUrl: `/${projectName}/`,

  organizationName,
  projectName,
  trailingSlash: false,

  onBrokenLinks: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'throw',
    },
  },

  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: 'docs',
          editUrl,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      /** @type {import('@easyops-cn/docusaurus-search-local').PluginOptions} */
      ({
        hashed: true,
        language: ['fr', 'en'],
        indexBlog: false,
        docsRouteBasePath: '/docs',
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'KORA ONE',
        logo: {
          alt: 'Logo KORA ONE',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'documentationSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {to: '/docs/roadmap', label: 'Roadmap', position: 'left'},
          {to: '/docs/contribuer', label: 'Contribuer', position: 'left'},
          {
            href: `https://github.com/${organizationName}/${projectName}`,
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {label: 'Introduction', to: '/docs/introduction/objectifs'},
              {label: 'Architecture', to: '/docs/architecture/vue-densemble'},
              {label: 'Setup', to: '/docs/developpement/setup'},
              {label: 'Déploiement', to: '/docs/deploiement/web-pwa'},
            ],
          },
          {
            title: 'Projet',
            items: [
              {label: 'Roadmap', to: '/docs/roadmap'},
              {label: 'Checklist', to: '/docs/checklist'},
              {label: 'Contribuer', to: '/docs/contribuer'},
            ],
          },
          {
            title: 'Liens',
            items: [
              {
                label: 'Dépôt GitHub',
                href: `https://github.com/${organizationName}/${projectName}`,
              },
              {label: 'hls.js', href: 'https://github.com/video-dev/hls.js'},
              {label: 'Docusaurus', href: 'https://docusaurus.io/'},
            ],
          },
        ],
        copyright: `MIT © ${new Date().getFullYear()} John Kalombo — KORA ONE. Projet personnel, non commercial.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;

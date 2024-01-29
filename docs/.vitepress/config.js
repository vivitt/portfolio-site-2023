import { defineConfig } from 'vitepress';

export default defineConfig({

  lang: 'en-US',
  title: 'Viviana Yanez',
  titleTemplate: 'Frontend Developer',
  description: 'I am Viviana Yanez (aka Vivi Yañez). I am a creative visual and audiovisual communicator who transitioned to software development. I create and build accessible and inclusive user interfaces to deliver enjoyable web experiences.',
  cleanUrls: true,
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
  },
  appearance: false,
  vue: ({
    template: {
      compilerOptions: {
        // treat all tags with 'vivitt-' as custom elements
        isCustomElement: (tag) => tag.includes('vivitt-'),
      },
    },
  }),
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    [
      'meta',
      {
        name: 'og:image',
        content: '/assets/viviyanezdev.png',
      },
    ],
    [
      'meta',
      {
        name: 'twitter:image',
        content: '/assets/viviyanezdev.png',
      },
    ],
  ],
  transformHead({ assets }) {
    const myFontFile = assets.find((file) => /playfairdisplay\.\w+\.woff2/);
    if (myFontFile) {
      return [
        [
          'link',
          {
            rel: 'preload',
            href: myFontFile,
            as: 'font',
            type: 'font/woff2',
            crossorigin: '',
          },
        ],
      ];
    } return [];
  },
  transformPageData(pageData) {
    pageData.frontmatter.head ??= [];
    pageData.frontmatter.head.push([
      'meta',
      {
        name: 'og:title',
        content: pageData.frontmatter.title,
      },
    ]);
    pageData.frontmatter.head.push([
      'meta',
      {
        name: 'og:description',
        content: pageData.frontmatter.isBlogPost
          ? pageData.frontmatter.excerpt
          : pageData.frontmatter.titleTemplate,
      },
    ]);
    pageData.frontmatter.head.push([
      'meta',
      {
        name: 'twitter:card',
        content: 'summary',
      },
    ]);
    pageData.frontmatter.head.push([
      'meta',
      {
        name: 'twitter:title',
        content: pageData.frontmatter.title,
      },
    ]);
    pageData.frontmatter.head.push([
      'meta',
      {
        name: 'twitter:description',
        content: pageData.frontmatter.isBlogPost
          ? pageData.frontmatter.excerpt
          : pageData.frontmatter.titleTemplate,
      },
    ]);
  },
});

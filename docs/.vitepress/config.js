import { defineConfig, createContentLoader } from 'vitepress';
import path from 'path';
import { writeFileSync } from 'fs';
import { Feed } from 'feed';
import footnote from 'markdown-it-footnote';

const hostname = 'https://www.viviyanez.dev';

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
  markdown: {
    config: (md) => {
      md.use(footnote);
    },
  },
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
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-8FT7WMMNQY' },
    ],
    [
      'script',
      {},
      ` window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-8FT7WMMNQY');`,
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
        name: 'og:image',
        content: 'https://www.viviyanez.dev/assets/viviyanezdev.png',
      },
    ]);
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
  },
  buildEnd: async (config) => {
    const feed = new Feed({
      title: "Vivi's Blog",
      description: 'A series of articles on web development, accessibility and career transition',
      id: hostname,
      link: hostname,
      language: 'en',
      image: 'https://www.viviyanez.dev/assets/vivisblog.png',
      // favicon: `${hostname}/favicon.ico`,
    });
    const posts = await createContentLoader('/blog/posts/*.md', {
      excerpt: true,
      render: true,
    }).load();

    posts.sort(
      (a, b) => +new Date(b.frontmatter.date)
        - +new Date(a.frontmatter.date),
    );
    posts.forEach((post) => {
      const {
        url, excerpt, frontmatter, html,
      } = post;
      feed.addItem({
        title: frontmatter.title,
        id: `${hostname}${url}`,
        link: `${hostname}${url}`,
        description: excerpt,
        content: html,
        author: [
          {
            name: 'Viviana Yanez',
            link: 'https://www.viviyanez.dev',
          },
        ],
        date: frontmatter.date,
      });
    });
    writeFileSync(path.join(config.outDir, 'feed.rss'), feed.rss2());
  },
});

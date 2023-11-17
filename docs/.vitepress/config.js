import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
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
  appearance: true,
  vue: ({
    template: {
      compilerOptions: {
        // treat all tags with a dash as custom elements
        isCustomElement: (tag) => tag.includes('-'),
      },
    },
  }),
});

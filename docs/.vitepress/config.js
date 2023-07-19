import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "en-US",
  title: "Viviana Yanez",
  description:
    "Hello, welcome to my personal site. Learn more about me, take a look at projects and/or read some of my blog post. Thanks for visiting :)",
  cleanUrls: true,
  themeConfig: {
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});

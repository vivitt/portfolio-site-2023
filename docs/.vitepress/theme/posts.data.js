import { createContentLoader } from "vitepress";

const data = {};
export { data };

export default createContentLoader("blog/posts/*.md", {
  excerpt: true,
  transform(raw) {
    return raw
      .map(({ url, frontmatter, excerpt }) => ({
        title: frontmatter.title,
        url,
        excerpt,
        date: frontmatter.date,
      }))
      .sort((a, b) => b.date.time - a.date.time);
  },
});

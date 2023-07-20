import { createContentLoader } from "vitepress";

const data = {};
export { data };

export default createContentLoader("projects/projects/*.md", {
  excerpt: true,
  transform(raw) {
    return raw
      .map(({ url, frontmatter, excerpt }) => ({
        title: frontmatter.title,
        url,
        excerpt,
        date: frontmatter.date,
        id: frontmatter.id,
        imageUrl: frontmatter.imageUrl,
        stack: frontmatter.stack,
      }))
      .sort((a, b) => a.id - b.id);
  },
});

import { createContentLoader } from "vitepress";

const data = {};
export { data };

export default createContentLoader("projects/projects/*.md", {
  excerpt: true,
  includeSrc: true,
  transform(raw) {
    return raw
      .map(({ url, frontmatter, excerpt }) => ({
        title: frontmatter.title,
        url,
        excerpt,
        date: frontmatter.date,
        id: frontmatter.id,
        imageUrl: frontmatter.imageUrl,
        alt: frontmatter.alt,
        stack: frontmatter.stack,
        deploy: frontmatter.deploy,
        github: frontmatter.github,
      }))
      .sort((a, b) => a.id - b.id);
  },
});

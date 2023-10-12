import { createContentLoader } from 'vitepress';

const data = {};
export { data };

export default createContentLoader('blog/posts/*.md', {
  excerpt: true,
  transform(raw) {
    return raw
      .map(({ url, frontmatter, excerpt }) => ({
        title: frontmatter.title,
        url,
        excerpt,
        date: frontmatter.date,
        id: frontmatter.id,
        link: frontmatter.link,
      }))
      .sort((a, b) => b.id - a.id);
  },
});

import { createContentLoader } from 'vitepress';

const formatPostDate = (postdate) => {
  const date = new Date(postdate);
  return {
    date: date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
  };
};

const data = [];
export { data };

export default createContentLoader('blog/posts/*.md', {
  excerpt: true,
  transform(raw) {
    return raw
      .map(({ url, frontmatter, excerpt }) => ({
        title: frontmatter.title,
        url,
        excerpt,
        date: formatPostDate(frontmatter.date).date,
        id: frontmatter.id,
        link: frontmatter.link,
      }))
      .sort((a, b) => b.id - a.id);
  },
});

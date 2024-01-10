export default function formatBlogPostTitle(title) {
  const words = title.split(' ');

  let lastLine = 0;
  const joined = [words[0]];
  words.map((item, i, self) => {
    if (self[i + 1]) {
      if ((joined[lastLine] + self[i + 1]).length < 20) {
        joined[lastLine] += ` ${self[i + 1]}`;
      } else {
        lastLine += 1;
        joined[lastLine] = words[i + 1];
      }
    }
    return joined;
  });

  return joined;
}

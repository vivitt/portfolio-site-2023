export default function formatBlogTitleForCoverImage(blogtitle) {
  if (blogtitle !== '') {
    const titleWords = blogtitle.split(' ');

    const titleLines = [titleWords[0]];
    let currentLine = 0;

    titleWords.map((item, i, self) => {
      if (self[i + 1]) {
        if ((titleLines[currentLine] + self[i + 1]).length < 20) {
          titleLines[currentLine] += ` ${self[i + 1]}`;
        } else {
          currentLine += 1;
          titleLines[currentLine] = titleWords[i + 1];
        }
      }
      return titleLines;
    });

    return titleLines;
  }
  return [];
}

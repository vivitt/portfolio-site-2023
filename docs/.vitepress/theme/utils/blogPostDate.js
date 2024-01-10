const month = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export default function blogPostDate(date) {
  return `${month[Number(date.slice(5, 7)) - 1]} ${date.slice(
    8,
    10,
  )}, ${date.slice(0, 4)}`;
}

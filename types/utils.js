// Case-insensitive comparator for sorting filenames.
const compareCaseInsensitive = (a, b) => {
  const al = a.toLowerCase();
  const bl = b.toLowerCase();

  if (al < bl) return -1;
  if (al > bl) return 1;
  return 0;
};

module.exports = { compareCaseInsensitive };

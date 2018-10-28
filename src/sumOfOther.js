module.exports = function sumOfOther(arr) {
  const sum = arr.reduce((pv, nv) => pv + nv);
  return arr.map(i => sum - i); // says error " Expected linebreaks to be 'LF' but found 'CRLF'", i dont know how to fix that
};

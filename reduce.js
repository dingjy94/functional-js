function countWords(inputWords) {
  // SOLUTION GOES HERE
  return inputWords.reduce((accum, cur) => {
    accum[cur] = ++accum[cur] || 1;
    return accum;
  }, {});
}

module.exports = countWords;

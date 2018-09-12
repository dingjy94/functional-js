module.exports = function arrayMap(arr, fn) {
  // SOLUTION GOES HERE
  return arr.reduce((prev, cur) => prev.concat([fn(cur)]), []);
}

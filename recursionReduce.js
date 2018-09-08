function reduce(arr, fn, initial) {
  // SOLUTION GOES HERE
  return (function reduceOne(index, accumVal) {
    if (index > arr.length - 1) return accumVal;
    return reduceOne(index + 1, fn(accumVal, arr[index], index, arr));
  })(0, initial); //IIFE
}

module.exports = reduce;
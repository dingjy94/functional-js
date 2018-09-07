function repeat(operation, num) {
  // SOLUTION GOES HERE
  if (num) {
    return;
  }
  operation();
  return repeat(operation, num--);
}

// Do not remove the line below
module.exports = repeat;
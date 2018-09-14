function Spy(target, method) {
  // SOLUTION GOES HERE
  const result = {count: 0};
  const oldMethod = target[method];

  target[method] = function() {
    result.count++;
    return oldMethod.apply(target, arguments);
  }
  return result;
}

module.exports = Spy;

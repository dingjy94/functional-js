module.exports = function (namespace) {
  // SOLUTION GOES HERE
  return function () {
    console.log(...arguments);
  }.bind(null, namespace);
}
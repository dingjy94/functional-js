function getDependencies(tree) {
  // SOLUTION GOES HERE
  // Note: Feel free to add additional arguments
  // to this function for use with recursive calls.
  // Or not! There are many ways to recurse.
  let result = [];
  if (tree === undefined) {
    return result;
  }
  const keys = Object.keys(tree);
  if (keys.includes("dependencies")) {
    const dependencies = Object.keys(tree.dependencies);
    // console.log(result);
    dependencies.map(key => {
      result.push(key + '@' + tree['dependencies'][key].version);
      result = result.concat(getDependencies(tree['dependencies'][key]));
      return key;
    });
    // console.log(result);
  }
  const set = new Set(result);
  return [...set].sort();
}

module.exports = getDependencies;
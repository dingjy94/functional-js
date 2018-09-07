function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    // SOLUTION GOES HERE
    return submittedUsers.every(user => (
      goodUsers.some(good => good.id === user.id)));
  };
}

module.exports = checkUsersValid;
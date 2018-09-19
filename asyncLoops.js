function loadUsers(userIds, load, done) {
  var users = []
  for (var i = 0; i < userIds.length; i++) {
    load(id, function(user) {
      users[i] = user;
      if (users.length === userIds.length) {
        return done(users);
      }
    })
  }
}

module.exports = loadUsers
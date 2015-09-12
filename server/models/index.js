var db = require('../db');

module.exports = {
  messages: {
    get: function(callback) {
      var queryString = 'SELECT messages.id messages.text, messages.roomname, users.username FROM messages LEFT OUTER JOIN users ON (messages.userid = users.id) ORDER by messages.id DESC';
      db.query(queryString, function(err, results) {
        callback(results);
      });
    },

    post: function(queryArgs, callback) {
      var queryString = 'INSERT INTO messages(userid, text, roomname) VALUES (?, (SELECT id FROM users WHERE username = ? LIMIT 1), ?)';
      db.query(queryString, queryArgs, function(err, results) {
        callback(results);
      });
    },
  },

  users: {
    get: function(callback) {
      var queryString = 'SELECT * FROM users';
      db.query(queryString, function(err, results) {
        callback(results);
      });
    },

    post: function(queryArgs, callback) {
      var queryString = 'INSERT INTO users(username) VALUES (?)';
      db.query(queryString, queryArgs, function(err, results) {
        callback(results);
      });
    },
  },
};

// module.exports.messages.POST({})


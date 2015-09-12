var db = require('../db');

module.exports = {
  messages: {
    get: function() {
      db.query('SELECT * from messages', function(err, rows, fields) {
        if (!err) {
          return rows;
          console.log(rows);
        } else {
          console.log('Error while performing Query.');
        }
      });
    }, // a function which produces all the messages

    post: function(object) {

      db.query('INSERT into messages VALUES ', function(err, rows, fields) {
        if (!err) {
          return rows;
        } else {
          console.log('Error while performing Query.');
        }
      });
    }, // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function() {

    },

    post: function() {

    },
  },
};

// module.exports.messages.POST({})


var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

module.exports = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'chat'
});

module.exports.connect();

module.exports.query('SELECT * from messages', function(err, rows, fields) {
  if (!err)
    console.log('The solution is: ', rows);
  else
    console.log('Error while performing Query.');
});

module.exports.end();

// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : '',
//   database : 'chat'
// });

// connection.connect();

// connection.query('SELECT * from messages', function(err, rows, fields) {
//   if (!err)
//     console.log('The solution is: ', rows);
//   else
//     console.log('Error while performing Query.');
// });

// connection.end();
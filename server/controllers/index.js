var models = require('../models');
var bluebird = require('bluebird');




module.exports = {
  messages: {
    get: function(req, res) {
      models.messages.get(function(err, results) {
        res.json(results);
      });
      
    }, // a function which handles a get request for all messages

    post: function(req, res) {
      var params = [req.body[text], req.body[username], req.body[roomname]]
      models.messages.post(params, function(err, results) {
        res.json(results);
      });
    }, // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function(req, res) {
      models.users.get(function(err, results) {
        res.json(results);
      });
    },

    post: function(req, res) {
      var params = [req.body[username]]
      models.users.post(params, function(err, results) {
        res.json(results);
      });
    },
  },
};

// app.get('/fetchdata',function(req,res){
//     var data = {
//         "Data":""
//     };
    
//     connection.query("SELECT * from testing",function(err, rows, fields){
//         if(rows.length != 0){
//             data["Data"] = rows;
//             res.json(data);
//         }else{
//             data["Data"] = 'No data Found..';
//             res.json(data);
//         }
//     });
// });
var models = require('../models');
var bluebird = require('bluebird');



module.exports = {
  messages: {
    get: function(req, res) {

    }, // a function which handles a get request for all messages

    post: function(req, res) {

    }, // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function(req, res) {

    },

    post: function(req, res) {

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
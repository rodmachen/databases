var db = require('../db');

module.exports = {
  messages: {
    get: function() {
      
    }, // a function which produces all the messages

    post: function() {

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
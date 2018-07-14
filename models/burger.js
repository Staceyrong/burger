// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");


// create the code that will call the ORM functions using burger specific input for the ORM.
var burger = {

  selectAll: function(cb){
    orm.selectAll(function(res){
      cb(res);
    });
  },

  insertOne: function(burger_name, cb){
    orm.insertOne(burger_name, function(res){
      cb(res);
    });
  },

  updateOne: function(id, cb){
    orm.updateOne(id, function(res){
      cb(res);
    });
  }

};


// Export at the end of the burger.js file.
module.exports = burger;
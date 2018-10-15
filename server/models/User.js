var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var User = new Schema({
  age:{
    type: Number
  },
  nom:{
    type: String
  },
  type:{
    type: String
  }
},{
    collection: 'User'
});

module.exports = mongoose.model('User', User);

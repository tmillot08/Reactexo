var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var Project = new Schema({
  titre:{
    type: String
  },
  description:{
    type: String
  },
  createur:{
    type: String
  }
},{
    collection: 'Project'
});

module.exports = mongoose.model('Project', Project);

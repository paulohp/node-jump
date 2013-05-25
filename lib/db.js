var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports.mongoose = mongoose;
module.exports.Schema = Schema;

var username = "paulohenrique";
var password = "jessicas2";
var address = "@ds027618.mongolab.com:27618/jump_test";
connect();

//Connect mongo
function connect(){
  var url = 'mongodb://' + username + ':' + password + address;
  mongoose.connect(url);
}
function disconnect(){
  mongoose.disconnect();
}
// 链接 yuea 集合
var mongoose = require('mongoose');
var db = mongoose.createConnection('mongodb://127.0.0.1:27017/yuea');
// 链接错误
db.on('error', function(error) {
  console.log(error);
});
// Schema 结构
var Schema = mongoose.Schema;
var userlistScheMa = new Schema({
  user	 : {type : String},
  password : {type : String},
  //content  : {type : String},
  //time	 : {type : Date, default: Date.now},
  age	  : {type : Number}
});
// 关联 yuea -> admins 表
exports.userlist = db.model('admins', userlistScheMa);
exports.db = db;
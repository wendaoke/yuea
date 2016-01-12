var campaign = require('./../db/yuea_schema.js');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

    res.render('campaign/introduction', {
    title: '活动简介'
  });
  
});

router.post('/list', function(req, res, next) {

var query = {user: req.body.user, password: req.body.password};
  admins.userlist.count(query, function(err, doc){ 
    if (doc==1) {
      var findResult = admins.userlist.find(function(error, result){
        if (error) {
          res.send(error);
        }else{
          res.render('admin/home', {
            title : '后台',
            status: doc,
            username : query.user,
            adminlist : result,
            date : new Date()
          });
        }
      });
    }else{
      res.render('admin/home', {
        title : '后台',
        status: doc,
      });
    }
  });
  
});


module.exports = router;
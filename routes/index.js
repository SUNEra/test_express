var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var mysql      = require('mysql');
  var connection = mysql.createConnection({
    host     : '10.1.48.194',
    user     : 'root',
    password : 'jalc_dev'
  });

  connection.connect();

  connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
    if (err) throw err;
    console.log('The solution is: ', rows[0].solution);
    console.log([1] == [1]);
  });

  connection.end();

  res.render('index', { title: 'Express' });
});

/*//对于一个路径上的所有请求加载中间件
router.all('/', function (req, res, next) {
  console.log('test');
  next();
});

router.get('/', function (req, res, next) {
  res.send('test');
});*/

module.exports = router;

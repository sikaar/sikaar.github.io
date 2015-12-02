var express = require('express');
var app = express();

module.exports = function(app)
{
     app.get('/',function(req,res){
     	console.log('index');
        res.render('index.html')
     });
     app.get('/about',function(req,res){
     	console.log('about');
        res.render('about.html');
    });
}

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
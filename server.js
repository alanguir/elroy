var express = require('express');
var lessMiddleware = require('less-middleware');

var app = express();
app.engine('.html', require('ejs').__express);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');

app.use(lessMiddleware({
    src      : __dirname + "/public",
    compress : false,
	force: true
  }));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.render('index');
});

var port = process.env.PORT || 3000;
app.listen(port);

console.log('Listening on port %d', port);

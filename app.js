
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var main = require('./routes/main');
var parserview = require('./routes/parser');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var socketio = require('socket.io');
var parser = require('rssparser');
var count = 0;

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', parserview.newsadda);
app.get('/commerce', parserview.commerce);
app.get('/state', parserview.state);
app.get('/national', parserview.national);
app.get('/sports', parserview.sports);
app.get('/movies', parserview.movies);
app.get('/columns', parserview.columns);
app.get('/science', parserview.science);
app.get('/special', parserview.special);
app.get('/agriculture', parserview.agriculture);
app.get('/foreign', parserview.foreign);

//app.get('/ex', parserview.ex);
app.get('/ex', parserview.ex);
app.get('/users', user.list);

var server = http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
main.init();
var io = socketio.listen(server);
io.sockets.on('connection', function (socket) {
  
  // socket.on('district', function (data) {
  //   console.log(data);
  // });

  main.newsfeed(socket);
});

var express = require('express')
var path = require('path')
var app = express()
var http = require('http').Server(app)
var io = require('socket.io')(http)

var messages = [];
var lastId = 0;

app.use(express.static('build'))

io.on('connection', function(socket){
  console.log(' * user connected');

  // Emit messages to connected users
  socket.emit('messages', messages);

  socket.on('disconnect', function(){
    console.log(' * user disconnected');
  });

  // When a message is sent, save it and emit it to users
  socket.on('message', function (message) {
    lastId += 1;
    message.id = lastId;
    message.time = new Date();
    if (messages.length > 100) {
      messages.shift();
    }
    messages.push(message);
    socket.broadcast.emit('message', message);
  });
});

var server = http.listen(3000, function(){
  console.log('Serving on port %s', server.address().port);
});

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
});

app.get('*', function(req, res){
  res.redirect('/');
});

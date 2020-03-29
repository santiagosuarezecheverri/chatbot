var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var respuesta = require('./respuesta.js');
var port = process.env.PORT || 3000;
function escuchar(){
    http.listen(port, function(){
        console.log('listening on *:' + port);
      });
}
module.exports.escuchar = escuchar;

function obtenerCliente(){
    app.get('/', function(req, res){ 
        console.log("obtener archivo index.html");
        res.sendFile(__dirname + '/index.html');
      });
}
module.exports.obtenerCliente = obtenerCliente;

function conexionMensaje(){
    io.on('connection', function(socket){
        socket.on('chat message', function(msg){
              console.log(msg + ": recibido en servidor");
              io.emit('chat message', msg); //cliente
              respuestaServidor(msg) //servidor
        });
      });
}
module.exports.conexionMensaje = conexionMensaje;

function respuestaServidor(msg){
    var response = respuesta.generarRespuesta(msg);
    
    console.log("emitir mensaje a cliente: " + response);
    
        io.emit('chat message', response);
  
}

  
  
  


var socket = io();
//escuchar (on)
socket.on('connect', function() {

    console.log('conectado al servidor');

});
//escuchar
socket.on('disconnect', function() {

    console.log('Se perdió conexion con el servidor');

});

//Enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Reinaldo',
    message: 'Hello world!'
}, function(res) {
    console.log('Respuesta server:', res);
});

//Escuchar enviarMensaje
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:', mensaje);
});
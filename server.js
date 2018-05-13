var net  = require('net')
var colors = require('colors')

var server = net.createServer()


//	Durante el ciclo de conexion del Socket Servidor
server.on('connection',(socket) => {
    var remoteAddress = socket.remoteAddress + ":" + socket.remotePort
    console.log('Nuevo Cliente conectado desde: %s'.green,remoteAddress )

    socket.on("data" ,(d) => {
        console.log('Información recibida %s: %s'.cyan, remoteAddress,d);
        socket.write("La informacion llego al Socket Server " + d)
    })

    socket.once("close",()=> {
        console.log('Conexion cerrada desde: %s'.yellow , remoteAddress )
    })

    socket.on("error", (err) => {
        console.log("Error en la Conexion: %s".red , remoteAddress, err.message)
    })

})


server.listen(9000,() => {
    console.log("Servidor socket: " + 9000)
})
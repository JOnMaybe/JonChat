const http = require('https').createServer();
var fs = require('fs');
var options = { 
    key:  fs.readFileSync('server.key'), 
    cert: fs.readFileSync('server.crt')
}; 

const io = require('socket.io')(http, {
    cors: { origin: "*" }
});
io.on('connection', (socket) => {
    console.log('a user connected');


    socket.on('message', (message) =>     {
        console.log(message);

        io.emit('message', `${message}` );
    });
});

http.listen(9600,() => console.log('listening on port 9600'),options);

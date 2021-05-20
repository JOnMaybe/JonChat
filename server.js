const http = require('http').createServer();

const io = require('socket.io')(http, {
    cors: { origin: "*" }
});
var name = "Unknown User";
io.on('connection', (socket) => {
    console.log('a user connected');


    socket.on('message', (message) =>     {
        console.log(message);

        io.emit('message', `${message}` );
    });
});

http.listen(80, () => console.log('listening on http://localhost:80') );

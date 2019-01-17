const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

// Config variables
const publicPath = path.join(__dirname, '../public');
const port       = process.env.PORT || 3000;

// Server setup
const app    = express();
var   server = http.createServer(app);
var   io     = socketIO(server);

const options = {
    extensions : ['html', 'htm']
}

app.use(express.static(publicPath, options));

io.on('connection', socket => {
    socket.emit('newMessage', {
        from : 'Admin',
        text : 'Welcome to the chat!',
        at   : new Date().getTime()
    });

    socket.broadcast.emit('newMessage', {
        from : 'Admin',
        text : 'A new user joined the chat',
        at   : new Date().getTime()
    })

    socket.on('createMessage', data => {

        io.emit('newMessage', { 
            from : data.from,
            text : data.text,
            at   : new Date().getTime()
        });
    });
});



server.listen(port, () => console.log(`Server listening on port ${port}`));

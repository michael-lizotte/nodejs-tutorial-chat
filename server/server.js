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

// Import util functions
const { generateMessage } = require('./utils/message');

const options = {
    extensions : ['html', 'htm']
}

app.use(express.static(publicPath, options));

io.on('connection', socket => {
    socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat'));
    socket.broadcast.emit('newMessage', generateMessage('Admin', 'A new user joined the chat'));

    socket.on('createMessage', data => {
        io.emit('newMessage', generateMessage(data.from, data.text));
    });
});



server.listen(port, () => console.log(`Server listening on port ${port}`));

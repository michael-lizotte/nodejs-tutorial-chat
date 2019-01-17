const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

// Config variables
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

// Server setup
const app = express();
var server = http.createServer(app);
var io = socketIO(server);

const options = {
    extensions : ['html', 'htm']
}

app.use(express.static(publicPath, options));

io.on('connection', socket => {
    console.log('New user connected');

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});



server.listen(port, () => console.log(`Server listening on port ${port}`));

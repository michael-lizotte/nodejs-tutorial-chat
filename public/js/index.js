var socket = io();

socket.on('connect', function () {
    console.log('Connected to the server');

    // socket.emit('createMessage', {
    //     from : 'jen@example.com',
    //     text : 'Sup. Got something for you'
    // });
});

socket.on('newMessage', function (data) {
    console.log(data);
});
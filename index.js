const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const PORT = process.env.PORT || 5000;

app.get('/api/login', (req, res) => {
    res.send({userID: Math.round(Math.random() * 1000)})
})

// socket io
io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('msg', (data) => {
        console.log(data);
        io.emit('msg', data)
    })

});


server.listen(PORT, () => {
    console.log('listening on port', PORT);
})

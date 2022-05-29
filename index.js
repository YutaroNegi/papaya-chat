const express = require('express');
const app = express();
const path = require('path');
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, '/front/build')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/front/build/index.html'));
})

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

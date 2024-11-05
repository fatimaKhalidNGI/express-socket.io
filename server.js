const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const socketHandler = require('./socketHandler');

const app = express();

app.use(express.static('public'));

const server = http.createServer(app);

app.use('/', require('./routes/socketRoute'));

const io = new Server(server);
socketHandler(io);

const port = 3500;
server.listen(port, () => {
    console.log(`Server running on Port ${port}`);
});
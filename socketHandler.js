module.exports = (io) => {
    io.on('connection', (socket) => {
        console.log("New user connected");

        socket.on('join room', (room) => {
            console.log(`User ${socket.id} joined ${room}`);

            socket.join(room);
        });

        socket.on('chat msg', ({ room, msg }) => {
            console.log(`Message from ${socket.id} to ${room}`);

            io.to(room).emit('chat msg', msg);
        });

        socket.on('disconnect', () => {
            console.log("User disconnected");
        })
    })
}
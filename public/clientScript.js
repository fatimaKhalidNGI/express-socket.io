const socket = io();

const joinRoom = () => {
    const room = document.getElementById('room').value;

    socket.emit('join room', room);
    console.log(`Joined ${room}`);
}

socket.on('chat msg', (msg) => {
    const msgElem = document.createElement('li');
    msgElem.textContent = msg;

    document.getElementById('messages').appendChild(msgElem);
});

const sendMessage = () => {
    const msg = document.getElementById('message').value;
    const room = document.getElementById('room').value;

    document.getElementById('message').value = '';
    document.getElementById('room').value = '';

    socket.emit('chat msg', ({ room, msg }));
}
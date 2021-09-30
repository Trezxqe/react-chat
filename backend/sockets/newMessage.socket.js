import db from './db.socket.js';

const newMessage = (socket, username, room, message) => {
  console.log('new message');
  const messageData = {
    username,
    message,
    socketId: socket.id,
    date: new Date(),
    messageId: null,
  };
  messageData.messageId = db.rooms[room].addMessage(messageData);
  socket.emit('room:newMessage', { messageData });
  socket.to(room).emit('room:newMessage', { messageData });
};

export default newMessage;

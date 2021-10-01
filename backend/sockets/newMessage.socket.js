import db from './db.socket.js';

const newMessage = (socket, req) => {
  const { roomType } = req;
  const messageData = {
    username: req.username,
    message: req.message,
    socketId: socket.id,
    date: new Date(),
    messageId: null,
  };
  if (roomType === 'room') {
    messageData.messageId = db.rooms[req.room].addMessage(messageData);
    socket.emit('room:newMessage', { messageData });
    socket.to(req.room).emit('room:newMessage', { messageData });
  } else if (roomType === 'dialog') {
    messageData.messageId = db.dialogs[req.room].addMessage(messageData);
    const ids = db.dialogs[req.room].getSocketIds();
    socket.to(ids).emit('dialog:newMessage', { messageData });
    socket.emit('room:newMessage', { messageData });
  }
};

export default newMessage;

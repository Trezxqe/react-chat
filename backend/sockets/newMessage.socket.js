import db from './db.socket.js';

const newMessage = (socket, req) => {
  const { roomType } = req;
  const messageData = {
    username: req.username,
    message: req.message,
    socketId: socket.id,
    date: new Date(),
    messageId: null,
    dialogName: null,
  };
  if (roomType === 'room') {
    messageData.messageId = db.rooms[req.room].addMessage(messageData);
    socket.emit('room:newMessage', { messageData });
    socket.to(req.room).emit('room:newMessage', { messageData });
  } else if (roomType === 'dialog') {
    messageData.messageId = db.dialogs[req.room].addMessage(messageData);
    messageData.dialogName = req.room;
    const ids = db.dialogs[req.room].getSocketIds();
    const roomChecker = {
      type: req.roomType,
      room: req.room,
    };
    socket.to(ids).emit('dialog:newMessage', { messageData, roomChecker });
    socket.emit('room:newMessage', { messageData });
  }
};

export default newMessage;

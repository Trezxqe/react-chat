import db from './db.socket.js';

const joinRoom = (socket, user, roomName, oldRoom = null, roomType) => {
  if (roomType === 'room') {
    db.rooms[roomName].connect(user);
    socket.join(roomName);
    socket.emit('user:joinRoom', { roomData: db.rooms[roomName].getRoomData() });
  } else if (roomType === 'dialog') {
    socket.emit('user:joinRoom', { roomData: db.dialogs[roomName].getRoomData() });
  }
  socket.leave(oldRoom);
};

export default joinRoom;

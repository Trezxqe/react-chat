import db from './db.socket.js';

const joinRoom = (socket, user, roomName, oldRoom = null) => {
  db.rooms[roomName].connect(user);
  socket.join(roomName);
  if (oldRoom) {
    socket.leave(oldRoom);
  }
  socket.emit('user:joinRoom', { roomData: db.rooms[roomName].getRoomData() });
};

export default joinRoom;

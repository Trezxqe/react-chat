import db from './db.socket.js';

const joinRoom = (socket, user, roomName) => {
  db.rooms[roomName].connect(user);
  socket.join(roomName);
  socket.emit('user:joinRoom', { roomData: db.rooms[roomName].getRoomData() });
};

export default joinRoom;

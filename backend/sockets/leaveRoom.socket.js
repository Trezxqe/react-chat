import db from './db.socket.js';

const leaveRoom = (socket, room) => {
  return db.rooms[room].leave(socket.id);
};

export default leaveRoom;

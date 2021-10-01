import db from './db.socket.js';

const leaveRoom = (socket, room) => {
  if (db.rooms[room]) {
    return db.rooms[room].leave(socket.id);
  } else if (db.dialogs[room]) {
    return db.dialogs[room].leave(socket.id);
  }
};

export default leaveRoom;

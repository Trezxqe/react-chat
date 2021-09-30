import db from './db.socket.js';

const updateUsersList = (socket) => {
  const roomsArr = Array.from(socket.rooms);
  roomsArr.forEach((roomName) => {
    if (db.rooms[roomName]) {
      socket
        .to(roomName)
        .emit('room:activeUsers', { usersList: db.rooms[roomName].getUsersList() });
    }
  });
};

export default updateUsersList;

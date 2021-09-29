import User from '../models/user.js';
import Room from '../models/room.js';
let usersArr = [];
let RoomsObj = [];

const initWebSockets = (io) => {
  RoomsObj['global'] = new Room('global', false);
  io.on('connection', (socket) => {
    socket.on('global:newUser', (username) => {
      const user = new User(socket.id, username);
      usersArr.push(user);
      socket.join('global');
      RoomsObj['global'].connect(user);
      io.emit('global:getUsers', usersArr);
      socket.emit('global:chatData', RoomsObj['global'].chatData);
    });
    socket.on('global:message', (message) => {
      const user = usersArr.find((roomer) => roomer.id === socket.id);
      const date = new Date();
      const messageId = RoomsObj['global'].addMessage(
        user.username,
        message,
        socket.id,
        date,
      );
      io.to('global').emit('global:message', {
        username: user.username,
        message,
        socketId: socket.id,
        messageId,
        date,
      });
    });
    socket.on('disconnect', () => {
      usersArr = usersArr.filter((el) => el.id !== socket.id);
      io.emit('global:getUsers', usersArr);
    });
  });
};

export default initWebSockets;

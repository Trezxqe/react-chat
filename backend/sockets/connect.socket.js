import User from '../models/user.js';
let usersArr = [];

const connectSocket = (io) => {
  io.on('connection', (socket) => {
    socket.on('global:newUser', (username) => {
      usersArr.push(new User(socket.id, username));
      io.emit('global:getUsers', usersArr);
    });
    socket.on('disconnect', () => {
      usersArr = usersArr.filter((el) => el.id !== socket.id);
      io.emit('global:getUsers', usersArr);
    });
  });
};

export default connectSocket;

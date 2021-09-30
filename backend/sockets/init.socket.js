import Room from '../models/room.js';
import createProfile from './createProfile.socket.js';
import joinRoom from './joinRoom.socket.js';
import updateUsersList from './updateUsersList.socket.js';
import userDisconnect from './userDisconnect.socket.js';
import db from './db.socket.js';
import newMessage from './newMessage.socket.js';

const initWebSockets = (io) => {
  const roomProfile = {
    roomName: 'global',
    isPrivate: false,
  };
  db.createRoom(roomProfile);
  io.on('connect', (socket) => {
    socket.on('user:createProfile', (req) => {
      const user = createProfile(req, socket);
      joinRoom(socket, user, 'global');
      updateUsersList(socket);
    });
    socket.on('user:newMessage', (req) => {
      const { username, room, message } = req;
      newMessage(socket, username, room, message);
    });
    socket.on('disconnecting', () => {
      userDisconnect(socket);
      updateUsersList(socket);
    });
  });
};

export default initWebSockets;

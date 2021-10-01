import createProfile from './createProfile.socket.js';
import joinRoom from './joinRoom.socket.js';
import updateUsersList from './updateUsersList.socket.js';
import userDisconnect from './userDisconnect.socket.js';
import db from './db.socket.js';
import newMessage from './newMessage.socket.js';
import leaveRoom from './leaveRoom.socket.js';

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
    socket.on('user:createRoom', (req) => {
      const { currentRoomName, roomProfile } = req;
      const roomName = db.createRoom(roomProfile);
      const user = leaveRoom(socket, currentRoomName);
      userDisconnect(socket);
      updateUsersList(socket);
      joinRoom(socket, user, roomName, currentRoomName);
    });
    socket.on('user:joinRoom', (req) => {
      const { currentRoomName, roomName } = req;
      const user = leaveRoom(socket, currentRoomName);
      userDisconnect(socket);
      updateUsersList(socket);
      joinRoom(socket, user, roomName, currentRoomName);
    });
    socket.on('user:startDialog', (req) => {
      const dialogProfile = req;
      dialogProfile.client.socketId = socket.id;
      const dialogCode = db.createDialog(dialogProfile);
      socket.emit('user:startDialog', { dialogCode });
    });
  });
};

export default initWebSockets;

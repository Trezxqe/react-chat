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
    roomType: 'room',
  };
  db.createRoom(roomProfile);
  io.on('connect', (socket) => {
    socket.on('user:createProfile', (req) => {
      const user = createProfile(req, socket);
      joinRoom(socket, user, 'global', null, 'room');
      updateUsersList(socket);
    });
    socket.on('user:newMessage', (req) => {
      newMessage(socket, req);
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
      joinRoom(socket, user, roomName, currentRoomName, roomProfile.roomType);
    });
    socket.on('user:joinRoom', (req) => {
      const { currentRoomName, roomName, roomProfile } = req;
      const user = leaveRoom(socket, currentRoomName);
      userDisconnect(socket);
      updateUsersList(socket);
      joinRoom(socket, user, roomName, currentRoomName, roomProfile.roomType);
      updateUsersList(socket);
    });
    socket.on('user:startDialog', (req) => {
      const { dialogProfile } = req;
      dialogProfile.client.socketId = socket.id;
      const dialogData = db.createDialog(dialogProfile);
      socket.emit('user:startDialog', { dialogData });
    });
  });
};

export default initWebSockets;

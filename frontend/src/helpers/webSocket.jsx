import { io } from 'socket.io-client';
import chatStore from './chatStore.jsx';

class WebSocket {
  constructor() {
    this.io = io;
    this.path = '/chat/';
    this.host = '/';
    this.socket = null;
  }
  connect(username) {
    this.socket = io(this.host, { path: this.path });
    this.socket.on('connect', () => {
      const { id } = this.socket;
      this.socket.on('global:getUsers', (usersList) => {
        chatStore.dispatch({ type: 'chat/getUsers', payload: { usersList } });
      });
      this.socket.on('global:message', (message) => {
        chatStore.dispatch({ type: 'chat/setMessage', payload: { message } });
      });
      this.socket.once('global:chatData', (chatData) => {
        chatStore.dispatch({
          type: 'chat/setData',
          payload: { chatHistory: chatData.history, roomName: chatData.name },
        });
      });
      this.socket.emit('global:newUser', username);
      chatStore.dispatch({ type: 'user/login', payload: { username, id } });
    });
  }
  disconnect() {}
  createRoom(data) {
    this.socket.emit('user:createRoom', data);
    this.socket.once('user:createRoom', (data) => {
      this.joinRoom(data.roomName);
    });
  }
  joinRoom(roomName) {
    this.socket.emit('user:joinRoom', { roomName });
    this.socket.once('user:joinRoom', (res) => {
      chatStore.dispatch({ type: 'chat/joinRoom', payload: res.data });
    });
  }
  leaveRoom() {}
  sendMessage(message) {
    this.socket.emit('global:message', message);
  }
}

export default new WebSocket();

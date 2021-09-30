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
      this.socket.emit('user:createProfile', { username });
      this.socket.on('user:createProfile', (res) => {
        chatStore.dispatch({
          type: 'user/connect',
          payload: { username, userId: this.socket.id },
        });
      });
      this.socket.once('user:joinRoom', (res) => {
        const { roomData } = res;
        chatStore.dispatch({ type: 'user/joinRoom', payload: roomData });
      });
      this._roomUsersListener();
      this._roomMessageListener();
    });
  }
  sendMessage(data) {
    this.socket.emit('user:newMessage', data);
  }
  createRoom(data) {
    this.socket.emit('user:createRoom', data);
    this.socket.once('user:joinRoom', (res) => {
      const { roomData } = res;
      if (!res.error) {
        chatStore.dispatch({ type: 'user/joinRoom', payload: roomData });
      }
    });
  }
  joinRoom(data) {
    this.socket.emit('user:joinRoom', data);
    this.socket.once('user:joinRoom', (res) => {
      const { roomData } = res;
      chatStore.dispatch({ type: 'user/joinRoom', payload: roomData });
    });
  }
  _roomUsersListener() {
    this.socket.on('room:activeUsers', (res) => {
      chatStore.dispatch({ type: 'room/activeUsers', payload: res });
    });
  }
  _roomMessageListener() {
    this.socket.on('room:newMessage', (res) => {
      chatStore.dispatch({ type: 'room/newMessage', payload: res });
    });
  }
}

export default new WebSocket();

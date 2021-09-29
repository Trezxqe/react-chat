import express, { urlencoded, json } from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import connectSocket from '../sockets/connect.socket.js';

class ChatServer {
  constructor() {
    this.app = express();
    this.httpServer = http.createServer(this.app);
    this.PORT = process.env.port || 5001;
    this.io = new Server(this.httpServer, { path: '/chat/' });

    this._middlewares();
    this._sockets();
  }
  _middlewares() {
    this.app.use(cors());
    this.app.use(urlencoded({ extended: true }));
    this.app.use(json());
  }
  _sockets() {
    connectSocket(this.io);
  }
  start() {
    this.httpServer.listen(this.PORT, () => {
      console.log('Server started, port:', this.PORT);
    });
  }
}

export default ChatServer;

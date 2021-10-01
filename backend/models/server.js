import express, { urlencoded, json } from 'express';
import path from 'path';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import initWebSockets from '../sockets/init.socket.js';

class ChatServer {
  constructor() {
    this.app = express();
    this.httpServer = http.createServer(this.app);
    this.PORT = process.env.port || 5001;
    this.io = new Server(this.httpServer, { path: '/chat/' });
    this.__dirname = path.resolve();
    this._middlewares();
    this._routes();
    this._sockets();
  }
  _middlewares() {
    this.app.use(cors());
    this.app.use(urlencoded({ extended: true }));
    this.app.use(json());
    this.app.use(express.static(path.join(this.__dirname, 'public')));
  }
  _sockets() {
    initWebSockets(this.io);
  }
  _routes() {
    this.app.get('*', (_, res) => {
      res.sendFile(path.join(this.__dirname, 'public/index.html'));
    });
  }
  start() {
    this.httpServer.listen(this.PORT, () => {
      console.log('Server started, port:', this.PORT);
    });
  }
}

export default ChatServer;

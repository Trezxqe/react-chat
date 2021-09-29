import dotenv from 'dotenv';
import ChatServer from './models/server.js';

dotenv.config();
const server = new ChatServer();
server.start();

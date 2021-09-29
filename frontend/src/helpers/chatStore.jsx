import { configureStore } from '@reduxjs/toolkit';
import chatReducer from './chatReducer.jsx';

const chatStore = configureStore({ reducer: chatReducer });

export default chatStore;

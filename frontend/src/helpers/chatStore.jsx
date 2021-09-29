import { createStore } from 'redux';
import chatReducer from './chatReducer.jsx';

const chatStore = createStore(chatReducer);

export default chatStore;

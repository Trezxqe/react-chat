import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import chatStore from './helpers/chatStore.jsx';

ReactDOM.render(
  <Provider store={chatStore}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

reportWebVitals();

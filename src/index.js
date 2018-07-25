import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from "./store";
import './index.css';
import MessageBoardApp from './MessageBoardApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <MessageBoardApp />
    </Provider>, document.getElementById('root'));
registerServiceWorker();

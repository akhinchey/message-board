import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MessageBoardApp from './MessageBoardApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MessageBoardApp />, document.getElementById('root'));
registerServiceWorker();

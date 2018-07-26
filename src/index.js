import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from "./store";
import './index.css';
import MessageBoardApp from './MessageBoardApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <MessageBoardApp />
        </PersistGate>
    </Provider>, document.getElementById('root'));
registerServiceWorker();

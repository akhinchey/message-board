import { createStore } from 'redux';
import messageBoardReducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';


let store = createStore(messageBoardReducer, composeWithDevTools());

export default store;

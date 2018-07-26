import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { composeWithDevTools } from 'redux-devtools-extension';
import messageBoardReducer from './reducer';


const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, messageBoardReducer)

const store = createStore(persistedReducer, composeWithDevTools());
const persistor = persistStore(store)

export { store, persistor }


import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import rootReducer from './reducer.js'


const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);
console.log(store)

export default store;
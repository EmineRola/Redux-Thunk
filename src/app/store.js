import { createStore, combineReducers } from 'redux';
import { chatReducer } from './reducers/chatReducer';
import { compose, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    chatReducer,
});

//applyMiddleware > store'a kullandığımız middlewarei tanıtmaya yarar
export default createStore(rootReducer, applyMiddleware(thunk));
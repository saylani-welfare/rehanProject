import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from "redux-thunk";

import Auth from './reducers/authReducer';

const middleware = applyMiddleware(thunk);

const rootReducer = combineReducers({
    Auth
});

const store = createStore(
    rootReducer,
    middleware
);

export default store
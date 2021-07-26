import {createStore , applyMiddleware} from 'redux'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import todoReducer from './todo/todoReducers'


const store = createStore(todoReducer , composeWithDevTools(applyMiddleware(logger , thunk)))

export default store
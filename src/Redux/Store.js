import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from '@redux-saga/core';
import { watchSaga } from '../Saga/Saga';
import logger from 'redux-logger';
import rootReducer from './RootReducer';

const sagaMidleware = createSagaMiddleware();
const middleware = [ sagaMidleware];

//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(  rootReducer,{},applyMiddleware(...middleware));

sagaMidleware.run(watchSaga);
export default store;



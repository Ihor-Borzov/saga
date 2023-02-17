import {combineReducers, createStore, applyMiddleware} from "redux"    
import userReducer from "./userReducer"

import createSagaMiddleware from "redux-saga"
import { watcherSaga } from "./sagas/rootSaga";


const sagaMiddleware = createSagaMiddleware();


let reducers = combineReducers({
    user: userReducer
})

let store = createStore(reducers, applyMiddleware(sagaMiddleware) )

sagaMiddleware.run(watcherSaga)

export default store
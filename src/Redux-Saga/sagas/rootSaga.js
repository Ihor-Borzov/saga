import {takeLatest} from "redux-saga/effects"
import { handleGetToDo, handleGetUser } from "./handlers/user"
import {SET_USER, SET_TODO} from "../userReducer"




//generator functions will help you to do async easy. Also here we are looking for any actions what have been dispatched from redux store
// and we map it with handler function which will actually call the request

export function* watcherSaga ( ) {
yield takeLatest(SET_USER, handleGetUser)

yield takeLatest(SET_TODO,handleGetToDo)
}




/* when a GET_USER action is dispatched our watcher saga will take that action and call corresponding handler,
 the handler will do the server request
after the request finished we will "yield put(actionCreator(data))" this is the way to dispatch an action to redux

*/
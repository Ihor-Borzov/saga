import  {call, put} from "redux-saga/effects"
import { settUser } from "../../userReducer";
import { requestGetUser } from "../requests/user"


export function* handleGetUser (action) {
    try{
        const response = yield call(requestGetUser)   // we are going to wait for this call to finish before move on, it works the same way as async await 
    const {data} = response;
    yield put(settUser(data))
    }
    catch (error) {
console.log(error)

    }
}


export function* handleGetToDo (){
    try{
        let response = yield call(()=>{
          return(fetch("https://jsonplaceholder.typicode.com/todos"))  
        })
            response = yield response.json()
        console.log(response)
    }
    catch(error){console.log(error)}
}



function* iterator (){
    for (let i =0; i<3;i++){
        yield i
    }
}

const iter = iterator()
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())



//.then((response)=>{response.json()})

export const GET_USER = "GET_USER"
export const SET_USER = "SET_USER"
export const SET_TODO = "SET_TODO"




let initialState = {
 user:undefined,
 todo:undefined
}



const userReducer = (state = initialState, action) => {

switch(action.type){
case SET_USER:
    const {user} = action
return{...state, user:user}

case SET_TODO:
    const {todo} = action
return{...state, todo:todo}

    default:
    return state;
}
}



export const getUser = () => { return({
    type:GET_USER
})
}

export const setUser = (user) => { return({
    type:SET_USER,
    user
})
}

export const settTodo = (todo) => { return({
    type:SET_TODO,
    todo
})
}






export default userReducer;
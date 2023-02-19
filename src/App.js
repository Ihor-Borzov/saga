import logo from './logo.svg';
import React, { useEffect, useState } from "react"
import './App.css';
import {useDispatch, useSelector} from "react-redux"
import { setUser, settTodo } from './Redux-Saga/userReducer';


function App() {

const dispatch = useDispatch()
 
useEffect(() => {
dispatch(setUser())
},[])  


const users = useSelector((state)=>state.user.user)
const todo = useSelector((state)=>state.user.todo)


  return (
    <div className="App">
<div>{users?users[0].name:null}</div>
<button onClick={()=>{dispatch(setUser())}}  > Get User</button>
<button onClick={()=>{dispatch(settTodo())}}  > Get todo</button>
{todo?.map((item)=><span key = {item.id}> {item.id} </span>) }
    </div>
  );
}















export default App;

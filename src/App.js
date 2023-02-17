import logo from './logo.svg';
import React, { useEffect, useState } from "react"
import './App.css';
import {useDispatch, useSelector} from "react-redux"
import { getUser, settTodo } from './Redux-Saga/userReducer';


function App() {

const dispatch = useDispatch()

useEffect(() => {
dispatch(getUser())
},[])  


const users = useSelector((state)=>state.user.user)


  return (
    <div className="App">
<div>{users?users[0].name:null}</div>
<button onClick={()=>{dispatch(settTodo())}}  > Get todo</button>
    </div>
  );
}















export default App;

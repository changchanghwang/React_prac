import React from 'react'
import { Link } from "react-router-dom";
import { ROUTE_HOME } from '../../Routes/const';
import { useLocation } from "react-router-dom";
import {  useSelector } from 'react-redux';

function DetailScreen (){

  const location = useLocation().pathname.split('/')
  const id = location[location.length-1]
  const todos = useSelector((state)=>state.todos)
  const todo = todos.filter((todo)=>todo.id === id)[0]

  return (
    <div style={{border:'1px solid black', display:'flex',flexDirection:'column',alignItems:'center'}}>
      <div style={{display:'flex', justifyContent:'space-between'}}>
        <div>id:{todo.id}</div>
        <Link to={ROUTE_HOME}><button>이전으로</button></Link>
      </div>
      <div>
        {todo.title}
      </div>
      <div>
        {todo.body}
      </div>
    </div>
  )
}

export {DetailScreen}
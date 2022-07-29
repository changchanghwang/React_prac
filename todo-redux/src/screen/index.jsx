import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formDelete, formSubmit, formDone } from '../redux/modules/todos';
import { ROUTE_DETAIL } from '../Routes/const';
import { Link } from "react-router-dom";

export * from './DetailScreen'

function Home(){

  const [form, setForm] = useState({ title: '', body: '' });

  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();
  
  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(formSubmit(form));
    setForm({ title: '', body: '' });
  };

  return (
    <>
    <div style={{ marginBottom: '20px' }}>todo list</div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          name="title"
          value={form.title}
          onChange={(e) => handleFormChange(e)}
        />
        <input
          name="body"
          value={form.body}
          onChange={(e) => handleFormChange(e)}
        />
        <button type="submit">추가하기</button>
      </form>
      <div style={{ margin: '20px 0' }}>
        해야할 일!
        {todos.map(
          (todo) =>
            !todo.isDone && (
              <div
                key={todo.id}
                style={{
                  border: '1px solid green',
                  textAlign: 'center',
                  padding: '15px',
                  margin: '10px 0',
                }}
              >
                <div>{todo.title}</div>
                <div>{todo.body}</div>
                <button onClick={() => dispatch(formDelete(todo.id))}>
                  삭제하기
                </button>
                <button onClick={() => dispatch(formDone(todo.id))}>
                  완료
                </button>
                <Link to={`${ROUTE_DETAIL}/${todo.id}`}>상세보기</Link>
              </div>
            )
        )}
      </div>
      <div>
        완료!
        {todos.map(
          (todo) =>
            todo.isDone && (
              <div
                key={todo.id}
                style={{
                  border: '1px solid green',
                  textAlign: 'center',
                  padding: '15px',
                  margin: '10px 0',
                }}
              >
                <div>{todo.title}</div>
                <div>{todo.body}</div>
                <button onClick={() => dispatch(formDelete(todo.id))}>
                  삭제하기
                </button>
                <button onClick={() => dispatch(formDone(todo.id))}>
                  취소
                </button>
                <Link to={`${ROUTE_DETAIL}/${todo.id}`}>상세보기</Link>
              </div>
            )
        )}
      </div></>
  )
}

export {Home}
import { useState } from 'react';
import './App.css';
import { Header, Form, List } from './component';

function App() {
  const [todos, setTodos] = useState([
    { id: 0, title: 'asd', body: 'asd', isDone: false },
  ]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleChange = (e) => {
    if (e.target.name === 'title') {
      setTitle(e.target.value);
    } else {
      setBody(e.target.value);
    }
  };

  const handleTodosSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, { id: todos.length + 1, title, body, isDone: false }]);
    setTitle('');
    setBody('');
  };

  return (
    <div className="App">
      <Header />
      <Form todos={todos} setTodos={setTodos} />
      <List todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;

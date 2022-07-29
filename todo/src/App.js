import { useState } from 'react';
import './App.css';
import { Header, Form, List, Layout } from './component';

function App() {
  const [todos, setTodos] = useState([
    { id: 0, title: 'asd', body: 'asd', isDone: false },
  ]);

  return (
    <Layout className="App">
      <Header />
      <Form todos={todos} setTodos={setTodos} />
      <List todos={todos} setTodos={setTodos} />
    </Layout>
  );
}

export default App;

import { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    { id: 0, title: 'asd', body: 'asd', isDone: false },
  ]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleChange = (e) => {
    console.log(e.target.name);
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
      <div>TodoList</div>
      <div style={{ display: 'flex' }}>
        <form onSubmit={(e) => handleTodosSubmit(e)}>
          <input
            value={title}
            placeholder="title"
            name="title"
            onChange={handleChange}
          />
          <input
            value={body}
            placeholder="body"
            name="body"
            onChange={handleChange}
          />
          <button type="submit">추가하기</button>
        </form>
      </div>
      <div style={{ marginBottom: '10px' }}>
        Working..
        {todos
          .filter((todo) => !todo.isDone)
          .map((todo) => (
            <div
              key={todo.id}
              style={{ border: '2px solid green', padding: '10px' }}
            >
              <div>{todo.title}</div>
              <div>{todo.body}</div>
              <div style={{ display: 'flex' }}>
                <button
                  onClick={() =>
                    setTodos((prev) =>
                      prev.filter((prev) => prev.id !== todo.id)
                    )
                  }
                >
                  삭제하기
                </button>
                <button
                  onClick={() =>
                    setTodos((prevs) => {
                      const a = prevs.map((prev) => {
                        if (prev.id === todo.id) {
                          return { ...prev, isDone: true };
                        }
                        return prev;
                      });
                      console.log(a);
                      return a;
                    })
                  }
                >
                  완료
                </button>
              </div>
            </div>
          ))}
      </div>
      <div>
        Done..!
        {todos
          .filter((todo) => todo.isDone)
          .map((todo) => (
            <div
              key={todo.id}
              style={{ border: '2px solid green', padding: '10px' }}
            >
              <div>{todo.title}</div>
              <div>{todo.body}</div>
              <div style={{ display: 'flex' }}>
                <button
                  onClick={() =>
                    setTodos((prev) =>
                      prev.filter((prev) => prev.id !== todo.id)
                    )
                  }
                >
                  삭제하기
                </button>
                <button
                  onClick={() =>
                    setTodos((prevs) => {
                      return prevs.map((prev) => {
                        if (prev.id === todo.id) {
                          return { ...prev, isDone: false };
                        }
                        return prev;
                      });
                    })
                  }
                >
                  취소
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;

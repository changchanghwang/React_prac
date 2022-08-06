import {useState} from 'react'

function Form(props){
  const {todos, setTodos} = props;

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
  )
}

export {Form}
function Todos(props){
  const {todo,setTodos} = props;
  return (
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
                  return { ...prev, isDone: !prev.isDone };
                }
                return prev;
              });
            })
          }
        >
          {todo.isDone ? '취소' : '완료'}
        </button>
      </div>
    </div>
  )
}

export {Todos}
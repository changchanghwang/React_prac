import { Todos } from "../Todos";

function List(props){
  const {todos} = props;

  return(
    <>
      <div style={{ marginBottom: '10px' }}>
        Working..
        {todos
          .filter((todo) => !todo.isDone)
          .map((todo) => (
            <Todos key={todo.id} />
          ))}
      </div>
      <div>
        Done..!
        {todos
          .filter((todo) => todo.isDone)
          .map((todo) => (
            <Todos key={todo.id} />
          ))}
      </div>
    </>
  )
}

export {List}
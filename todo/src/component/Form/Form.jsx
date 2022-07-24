function Form(props){
  const {handleTodosSubmit,handleChange,title,body}=props;


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
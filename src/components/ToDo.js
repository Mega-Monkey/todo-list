const ToDo = ({todo, handleToggle, handleRemove}) => {
  
  const handleClick = (e) => {
    e.preventDefault()
    handleToggle(e.currentTarget.id)
  }

  return(
    <div>
      <div id={todo.id} onClick={handleClick} className={todo.complete ? "strike" : ""}>{todo.task}</div>
      <div id={todo.id} onClick={handleRemove} >x</div>
    </div>

  )
}

export default ToDo
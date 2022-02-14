import ToDo from './ToDo'

const ToDoList = ({toDoList, handleToggle, handleRemove}) => {
  
  return(
     <div>
       {/* {console.log(toDoList)} */}
       
       {toDoList.map(todo => {
       return (
        <ToDo key={todo.id} todo={todo} handleToggle={handleToggle} handleRemove={handleRemove} />
       )
    })}
    </div>
  )
}

export default ToDoList
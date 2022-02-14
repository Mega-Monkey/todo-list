import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import data from './data.json';
import ToDoList from './components/ToDoList';
import Input from './components/Input';




function App() {
  const [ toDoList, setToDoList ] = useState(data);
 
  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id == id ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
  }

  const addtask = (userInput) => {
    let copy = toDoList
    copy.push({id: copy.length + 1, task: userInput, complete: false})
    setToDoList(copy)  
  }
  
  const handleRemove = (id) => {
    copy = toDoList
    // console.log(copy)
  }
  
  return ( <div>
      <Header/>
      <ToDoList toDoList={toDoList} handleToggle={handleToggle} />
      <Input addtask={addtask} />
  </div>
 );
}
 
export default App;


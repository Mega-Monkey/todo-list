import React, { useState } from 'react';


function Input({addtask}) {

  const [ userInput, setUserInput ] = useState("");
  const handleChange = (e) => {
    setUserInput(e.currentTarget.value) 
  }

  const onSubmit = (e) => {
    e.preventDefault()
    addtask(userInput)
    setUserInput("")
  }
  

  return (
    <form onSubmit={onSubmit}>
      <input value={userInput} type="text"  onChange={handleChange} placeholder="Enter task..."/>
      <button>Submit</button>
    </form>
  )
}

export default Input
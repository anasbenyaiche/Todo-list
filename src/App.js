
import React, { useState } from 'react'
import './App.css';
import TodoList from './components/TodoList';

function App() {

  const [todos, setTodos] = useState([
    { id: Math.random(), title: "Making dinner", isCompleted: false },
    { id: Math.random(), title: "Clean the car", isCompleted: false },
    { id: Math.random(), title: "finish navbar", isCompleted: false },
  ])
  const [task, setTask] = useState("");



  const handleChange = (event) => {
    event.preventDefault();
    setTask(event.target.value);
  };
  const handleClick = () => {
    setTodos([...todos,{id:Math.random(), title: task, isCompleted: false}])
    setTask("");
  };
  const handleDelete = (id) => {
    setTodos(todos.filter(task => task.id !== id ))
  }

  const handleCross = (id) => {
    
    setTodos(todos.map(todo=> todo.id ===id ? {...todo,isCompleted: !todo.isCompleted} : todo ))
  }

  return (
    <div className="App">
       <div className="add-todo-container">
        <h1>What is your next Task?</h1> 
      <input className='form-control' value={task} onChange={handleChange} />
      <hr/>
      <div>
      <button className='btn btn-primary' onClick={handleClick} type="button">
        Add Task
      </button>
      </div>

    </div>
      <TodoList todoList={todos} onDelete={handleDelete}  onCross={handleCross}  />
    </div>
  );
}

export default App;

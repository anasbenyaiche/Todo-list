import React, { useEffect, useState } from "react";
import Todo from "./Todo";

function TodoList({ todoList, onCross, onDelete }) {
  const [state, setState] = useState({ search: "", filter:'' });
  useEffect(() => {}, [todoList]);

  const handleChange = (event) => {
    const { value, name } = event.target;
    console.log(name, value )
    setState({ ...state, [name]: value });
  };

  return (
    <div className="todo-list-container">
      <input
        name="search"
        onChange={handleChange}
        placeholder="search..."
        value={state.search}
      />

      <ul>
        {todoList.filter(el => el.title.toLowerCase().includes(state.search.toLowerCase())).map((todo) => (
          <Todo task={todo} onCross={onCross} onDelete={onDelete} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

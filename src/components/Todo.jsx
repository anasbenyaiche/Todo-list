import React from "react";
import PropTypes from "prop-types";
const Todo = ({ task, onCross, onDelete }) => {
  const { title, isCompleted, id } = task;
  return (
    <li style={{ display: "flex" }}>
      <span style={{ textDecoration: isCompleted ? "line-through" : "none" }}>
        {title}
      </span>
      <div style={{ justifyContent: "space-between" }}></div>
      <button className="btn btn-danger" onClick={()=> onDelete(id)} >Delete</button>

      <button
        onClick={() => {
          onCross(id);
        }}
        className="btn btn-info"
      >
        {!isCompleted ? "Cross" : "Cancel"}
      </button>
    </li>
  );
};

Todo.propTypes = {
  task: {
    title: PropTypes.string.isRequired,
  },
};

export default Todo;

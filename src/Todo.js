import React from "react";

const Todo = ({ details, onDelete }) => {
  return (
    <div>
      <li>
        {details.todo}
        <button
          onClick={() => {
            onDelete(details.id);
          }}
        >
          X
        </button>
      </li>
    </div>
  );
};

export default Todo;

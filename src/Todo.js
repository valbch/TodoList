import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

// faire cmd + click pour acceder à la librairie

const Todo = ({ details, onDelete }) => {
  return (
    <div>
      <li>
        {details.todo}
        <FontAwesomeIcon
          icon={faTrashAlt}
          color="orange"
          onClick={() => {
            onDelete(details.id);
          }}
        />

        {/* <button
          onClick={() => {
            onDelete(details.id);
          }}
        >
          x
        </button> */}
      </li>
    </div>
  );
};

export default Todo;

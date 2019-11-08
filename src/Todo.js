import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

// faire cmd + click pour acceder à la librairie

const Todo = ({ details, onDelete }) => {
  return (
    <div>
      <li className="list">
        {
          <input
            className="checkbox"
            type="checkbox"
            Checked={false}
            name="packersOff"
          ></input>
        }
        <label for="packersOff">{details.todo}</label>

        <span className="close">
          <FontAwesomeIcon
            icon={faTrashAlt}
            color="orange"
            onClick={() => {
              onDelete(details.id);
            }}
          />
        </span>
      </li>
    </div>
  );
};

export default Todo;

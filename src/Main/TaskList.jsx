import React from 'react';
import { FaTrash } from 'react-icons/fa';
import style from '../Main/Task.module.css';


function UpdatedTaskList({ tasks, toggleTaskCompletion, deleteTask }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index} className={style.NewListItem}>
          <input
            type="checkbox"
            checked={task.isCompleted}
            onChange={() => toggleTaskCompletion(index)}
          />
          <span style={{ textDecoration: task.isCompleted ? 'line-through' : 'none' }}>
            {task.text}
          </span>
          <button onClick={() => deleteTask(index)}>
            <FaTrash />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default UpdatedTaskList;

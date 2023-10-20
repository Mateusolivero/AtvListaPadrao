import React, { useState } from 'react';
import style from '../Main/Task.module.css';

import { FaTrash } from 'react-icons/fa';

function UpdatedTaskComponent() {
  const [currentView, setCurrentView] = useState("active");
  const [newTask, setNewTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  const toggleTaskCompletion = (taskToToggle) => {
    const updatedTaskList = taskList.map((task) => {
      if (task === taskToToggle) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTaskList(updatedTaskList);
  };

  const filteredTasks = taskList.filter((task) => {
    if (currentView === "active") {
      return !task.isCompleted;
    } else if (currentView === "completed") {
      return task.isCompleted;
    }
    return true;
  });

  const addNewTask = () => {
    if (newTask.trim() !== "") {
      setTaskList([{ text: newTask, isCompleted: false }, ...taskList]);
      setNewTask('');
    }
  }

  const deleteTask = (taskToDelete) => {
    const updatedTaskList = taskList.filter((task) => task !== taskToDelete);
    setTaskList(updatedTaskList);
  };

  return (
    <>
      <div className={style.NewAppMain}>
        <h1>Task List</h1>
        <input
          type="text"
          placeholder="New Task"
          value={newTask}
          name="newTask"
          onChange={(e) => setNewTask(e.target.value)}
        /><br />
        <button onClick={addNewTask}>Add Task</button>
        <ul>
          {filteredTasks.map((task) => (
            <li key={task.text} className={style.NewListItem}>
              {task.text}{' '}
              <div className={style.NewItemActions}>
                <input
                  type="checkbox"
                  name="isCompleted"
                  className={style.NewButtonCheckBox}
                  checked={task.isCompleted}
                  onChange={() => toggleTaskCompletion(task)}
                />
                <button
                  className={style.NewButtonTrash}
                  onClick={() => deleteTask(task)}
                >
                  <FaTrash className={style.NewTrashIcon} />
                </button>
              </div>
            </li>
          ))}
        </ul>
        <div>
          <button onClick={() => setCurrentView("active")}>Active Tasks</button>
          <button onClick={() => setCurrentView("completed")}>Completed Tasks</button>
        </div>
      </div>
    </>
  );
}

export default UpdatedTaskComponent;

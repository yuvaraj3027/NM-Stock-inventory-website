import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const AddTask = ({ addTask }) => {
  const [value, updateValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value !== "") {
      addTask(value);
      updateValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        placeholder="Enter your task to do"
        onChange={(e) => updateValue(e.target.value)}
      />
      <button type="submit">
        <i className="material-icons">add</i>
      </button>
    </form>
  );
};

const ToDoList = () => {
  const [tasks, updateTasks] = useState([
    {
      text: "Wake Up",
      isCompleted: false,
    },
    {
      text: "Fresh Up",
      isCompleted: false,
    },
    {
      text: "Boost Up",
      isCompleted: false,
    },
  ]);

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].isCompleted = !newTasks[index].isCompleted;
    updateTasks(newTasks);
  };

  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    updateTasks(newTasks);
  };

  const addTask = (text) => {
    const newTask = {
      text,
      isCompleted: false,
    };
    updateTasks([...tasks, newTask]);
  };

  return (
    <div className="list-of-task-todo">
      <AddTask addTask={addTask} />
      {tasks.map((task, index) => (
        <div key={index} className="task-status">
          <span
            onClick={() => toggleTask(index)}
            className={task.isCompleted ? "completed task" : "task"}
          >
            {task.text}
          </span>
          <button onClick={() => removeTask(index)}>
            <i className="material-icons">delete</i>
          </button>
        </div>
      ))}
    </div>
  );
};

ReactDOM.render(<ToDoList />, document.getElementById("root"));

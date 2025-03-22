import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("");
  const [task, setTask] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editInput, setEditInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const addTask = () => {
    if (input.trim() === "") return;
    setTask([...task, input]);
    setInput("");
  };

  const removeTask = (index) => {
    setTask(task.filter((_, i) => i !== index));
  };

  const editTask = (index) => {
    setEditIndex(index);
    setEditInput(task[index]);
  };

  const handleEditChange = (e) => {
    setEditInput(e.target.value);
  };

  const handleKeyPress = (e, index) => {
    if (e.key === "Enter") {
      const updatedTasks = [...task];
      updatedTasks[index] = editInput;
      setTask(updatedTasks);
      setEditIndex(null);
    }
  };

  return (
    <div className="container">
      <div className="todo-box">
        <h1 className="title">To-Do List</h1>
        <input
          type="text"
          className="input-field"
          placeholder="Enter task"
          value={input}
          onChange={handleChange}
        />
        <button className="btn green" onClick={addTask}>
          Add
        </button>
        <ul className="task-list">
          {task.map((t, index) => (
            <li key={index} className="task-item">
              <div className="task-container">
                {editIndex === index ? (
                  <input
                    type="text"
                    className="input-field"
                    placeholder="Edit task"
                    value={editInput}
                    onChange={handleEditChange}
                    onKeyDown={(e) => handleKeyPress(e, index)}
                  />
                ) : (
                  <span>{t}</span>
                )}
                <div className="button-group">
                  <button className="btn yellow" onClick={() => editTask(index)}>
                    Edit
                  </button>
                  <button className="btn red" onClick={() => removeTask(index)}>
                    Remove
                  </button>
                </div>
              </div>
              <hr className="divider" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;

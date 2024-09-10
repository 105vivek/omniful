import React, { useState } from "react";

function taskManager() {
  const [tasks, setTasks] = useState([]);
  const [takeInput, setTakeInput] = useState([]);
  const addTask = () => {
    if (takeInput.trim() === "") {
      return;
    }
    const newTask = { id: Date.now(), title: takeInput, completed: false };
    setTasks([...tasks, newTask]);
    setTakeInput("");
  };
  return <div></div>;
}

export default taskManager;

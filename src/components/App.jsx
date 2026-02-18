import { useState, useEffect } from "react";

import Form from "./Form";
import TaskList from "./TaskList";

export default function App() {
  const [tasks, setTasks] = useState(function () {
    const storedValue = localStorage.getItem("tasks");
    return storedValue ? JSON.parse(storedValue) : [];
  });

  function handleAddTasks(task) {
    setTasks((tasks) => [...tasks, task]);
  }

  function handleDeleteTask(id) {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  }

  function handleToggleTask(id) {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  }

  useEffect(
    function () {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    },
    [tasks],
  );

  return (
    <div className="container">
      <h1 className="title">Task Manager</h1>

      <Form onAddTasks={handleAddTasks} />

      <TaskList
        tasks={tasks}
        onDeleteTask={handleDeleteTask}
        onToggleTask={handleToggleTask}
      />
    </div>
  );
}

import { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import AddTask from "./AddTask";
import TasksList from "./TasksList";
import { Card } from "@mui/material";

function App() {
  const [tasks, setTasks] = useState<string[]>(
    (): string[] =>
      JSON.parse(window.localStorage.getItem("tasks") as string) || []
  );

  useEffect(() => {
    window.localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function handleAddTask(task: string): void {
    if (!task) {
      return;
    }
    const newTasks = [...tasks];
    newTasks.push(task);
    setTasks(newTasks);
  }

  function handleDeleteTask(task: string): void {
    const index = tasks.indexOf(task);
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  }

  return (
    <div className="App">
      <main className="App-main">
        <Card
          raised
          className="App-main-card"
          children={
            <div>
              <Header date={new Date()} />
              <AddTask onAddTask={handleAddTask} />
              <TasksList tasks={tasks} onDeleteTask={handleDeleteTask} />
            </div>
          }
        ></Card>
      </main>
    </div>
  );
}

export default App;

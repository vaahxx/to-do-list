import { useState } from "react";
import "./App.css";
import Header from "./Header/Header";
import AddTask from "./AddTask/AddTask";
import { Card } from "@mui/material";

function App() {
  const [tasks, setTasks] = useState<string[]>([]);
  function handleAddTask(task: string) {
    const newTasks = [...tasks];
    newTasks.push(task);
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
              <Header date={new Date()}></Header>
              <AddTask onAddTask={handleAddTask}></AddTask>
              {tasks}
            </div>
          }
        ></Card>
      </main>
    </div>
  );
}

export default App;

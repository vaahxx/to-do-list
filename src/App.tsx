import React from "react";
import "./App.css";
import Header from "./Header/Header";
import { Card } from "@mui/material";

function App() {
  return (
    <div className="App">
      <main className="App-main">
        <Card
          className="App-main-card"
          children={
            <div>
              <Header date={new Date()}></Header>
              <p>
                Edit <code>src/App.tsx</code> and save to reload.
              </p>
            </div>
          }
        ></Card>
      </main>
    </div>
  );
}

export default App;

import { useState } from "react";
import { TextField, Button } from "@mui/material";

interface AddTaskProps {
  onAddTask: Function;
}

function AddTask(props: AddTaskProps): JSX.Element {
  const [task, setTask] = useState("");
  return (
    <div style={{ display: "flex" }}>
      <TextField
        fullWidth
        autoFocus
        id="standard-basic"
        label="New Task"
        variant="standard"
        onChange={(ev) => setTask(ev.target.value)}
      />
      <Button variant="outlined" onClick={(ev) => props.onAddTask(task)}>
        Add
      </Button>
    </div>
  );
}

export default AddTask;

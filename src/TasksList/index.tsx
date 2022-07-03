import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";

interface TasksListProps {
  tasks: string[];
  onDeleteTask: Function;
}

export default function TasksList(props: TasksListProps): JSX.Element {
  const [checked, setChecked] = React.useState<string[]>([]);

  const handleToggle = (value: string) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {props.tasks.map((task: string, index: number) => {
        const labelId = `checkbox-list-label-${task}-${index}`;

        return (
          <ListItem
            key={labelId}
            secondaryAction={
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => props.onDeleteTask(task)}
              >
                <ClearIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton role={undefined} onClick={handleToggle(task)} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(task) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": labelId }}
                />
              </ListItemIcon>
              <ListItemText
                id={labelId}
                primary={checked.indexOf(task) !== -1 ? <s>{task}</s> : task}
              />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}

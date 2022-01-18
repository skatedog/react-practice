import TextField from "@mui/material/TextField";
import { ToDoList } from "./ToDolist";
import { useToDoList } from "../hooks/useToDoList";

export const App = () => {
  const { items, addToDo, checkToDo, deleteToDo } = useToDoList();

  const keyDown = (e) => {
    if (e.key === "Enter") {
      const input = document.getElementById("input-text");
      addToDo(input.value);
      input.value = "";
    }
  };

  const onCheck = (index) => {
    checkToDo(index);
  };

  const onClickDelete = (index) => {
    deleteToDo(index);
  }
  
  return (
    <>
      <h1>ToDo</h1>
      <TextField id="input-text" label="予定" variant="standard" onKeyDown={keyDown}></TextField>
      <ToDoList items={items} onCheck={onCheck} onClickDelete={onClickDelete}></ToDoList>
    </>
  );
};
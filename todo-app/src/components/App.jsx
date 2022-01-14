import TextField from "@mui/material/TextField";
import { useState } from "react";
import { ToDoList } from "./ToDolist";

export const App = () => {

  const [items, setItems] = useState([
    { key: "a", text: "hoge", done: true },
    { key: "aaa", text: "fuga", done: true },
  ]);

  const keyDown = (e) => {
    if (e.key === "Enter") {
      const input = document.getElementById("input-text");
      setItems([...items, { key: items.length, text: input.value, done: false }]);
      input.value = "";
    }
  };

  const onCheck = (index) => {
    const newItems = items.map((item, i) => {
      if (i === index) {
        item.done = !item.done;
      }
      return item;
    });
    setItems(newItems);
  };

  const onClickDelete = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  }
  
  return (
    <>
      <h1>ToDo</h1>
      <TextField id="input-text" label="予定" variant="standard" onKeyDown={keyDown}></TextField>
      <ToDoList items={items} onCheck={onCheck} onClickDelete={onClickDelete}></ToDoList>
    </>
  );
};
import { useState } from "react";

export const useToDoList = () => {
  const [items, setItems] = useState([
    { key: "a", text: "hoge", done: true },
    { key: "aaa", text: "fuga", done: true },
  ]);
  
  const addToDo = (text) => {
    const newItems = [...items, { key: items.length, text: text, done: false }];
    setItems(newItems);
  };
  
  const checkToDo = (index) => {
    const newItems = items.map((item, i) => {
      if (i === index) {
        item.done = !item.done;
      }
      return item;
    });
    setItems(newItems);
  };
  
  const deleteToDo = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return { items, addToDo, checkToDo, deleteToDo };
};
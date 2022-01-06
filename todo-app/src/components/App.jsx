import TextField from "@mui/material/TextField";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import Paper from '@mui/material/Paper';
import { useState } from "react";
import { Item } from "./Item";

export const App = () => {

  const [items, setItems] = useState(["hoge", "fuga"]);

  const keyDown = (e) => {
    if (e.key === "Enter") {
      const input = document.getElementById("input-text");
      setItems([...items, input.value]);
      input.value = "";
    }
  };

  return (
    <>
      <h1>ToDo</h1>
      <TextField id="input-text" label="予定" variant="standard" onKeyDown={keyDown}></TextField>
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            {items.map((item) => {
              return (
                <Item>{item}</Item>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import Paper from '@mui/material/Paper';
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Button } from "@mui/material";

export const ToDoList = (props) => {
  const { items, onCheck, onClickDelete } = props;

  const handleChange = (index) => {
    onCheck(index);
  }

  const clickDelete = (index) => {
    console.log("delete");
    onClickDelete(index);
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableBody>
          {items.map((item, index) => (
            <TableRow key={item.key}>
              <TableCell>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={item.done}
                        onChange={() => { handleChange(index) }}
                      />
                    }
                    label={item.text}
                  />
                </FormGroup>
              </TableCell>
              <TableCell>
                <Button
                  onClick={() => { clickDelete(index) }}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
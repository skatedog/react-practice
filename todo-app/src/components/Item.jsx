import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Button } from "@mui/material";

export const Item = (props) => {
  const { index, done, children, onCheck, onClickDelete } = props;

  const handleChange = () => {
    onCheck(index);
  }

  const clickDelete = () => {
    onClickDelete(index);
  }

  return (
    <TableRow>
      <TableCell>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={done}
                onChange={handleChange}
              />
            }
            label={children}
          />
        </FormGroup>
      </TableCell>
      <TableCell>
        <Button
          onClick={clickDelete}
        >
          Delete
        </Button>
      </TableCell>
    </TableRow>
  );
};
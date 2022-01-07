import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export const Item = (props) => {
  const { index, done, children, onCheck } = props;

  const handleChange = () => {
    onCheck(index);
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
    </TableRow>
  );
};
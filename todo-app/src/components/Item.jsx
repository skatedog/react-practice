import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

export const Item = (props) => {
  return (
    <TableRow>
      <TableCell>{props.children}</TableCell>
    </TableRow>
  );
};
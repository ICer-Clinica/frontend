import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import NoResults from "../NoResults";

export type IColumns = {
  label: string;
  value: string;
};

interface IListTable {
  columns: IColumns[];
  rows: object[];
}

export default function ListTable({ columns, rows }: IListTable): JSX.Element {
  return (
    <TableContainer
      component={Paper}
      sx={{
        thead: {
          backgroundColor: "#FE6270",
          position: "sticky",
          top: 0,
          th: {
            color: "white",
            fontSize: "1rem",
            fontWeight: 700,
            fontFamily: "Poppins",
          },
        },
        tbody: {
          tr: {
            "&:nth-of-type(even)": {
              backgroundColor: "#fff7f7",
            },
          },
        },
        height: "70vh",
        maxHeight: "70vh",
        width: "100%",
        borderRadius: "20px",
      }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns &&
              columns?.map((column: IColumns, index) => (
                <TableCell key={index}>{column?.label}</TableCell>
              ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.map((row: any) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {columns?.map((column) => (
                <TableCell component="th" scope="row">
                  {row[column?.value]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <NoResults />
    </TableContainer>
  );
}

import * as React from "react";
import TablePagination from "@mui/material/TablePagination";

export interface ITablePagination {
  rowsPerPage: number
  page: number
  count: number
  rowsPerPageOptions?: number[]
  setRowsPerPage: (rowsPerpage: number) => void
  setPage: (page: number) => void
}

export default function TablePaginationDemo({rowsPerPageOptions, rowsPerPage, setRowsPerPage, page, setPage, count}: ITablePagination) {
  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
      <TablePagination
        component="div"
        count={count}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={rowsPerPageOptions ?? [10, 25, 30]}
      />
  );
}

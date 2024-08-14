import * as React from "react";
import TablePagination from "@mui/material/TablePagination";
import { GetProducts } from "services/services";
import { useQuery } from "react-query";
import { Button } from "@mui/material";

export default function TablePaginationDemo() {
  const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const [getResult, setGetResult] = React.useState(null);

  const { isLoading: isLoadingTutorials, refetch: getAllTutorials } = useQuery(
    "query-tutorials",
    async () => {
      return GetProducts();
    },
    {
      enabled: false,
      onSuccess: (res) => {
        const result = {
          status: res.status + "-" + res.statusText,
          headers: res.headers,
          data: res.data,
        };

        console.log("response", result);
      },
      onError: (err) => {
        console.log("response", err);
      },
    }
  );

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
    <>
      <Button onClick={async () => getAllTutorials()}>clic</Button>
      <TablePagination
        component="div"
        count={100}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
}

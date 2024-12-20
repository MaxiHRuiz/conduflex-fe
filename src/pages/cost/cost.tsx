import CustomContainer from "../../components/customContainer/CustomContainer";
import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import { GridPaginationModel, GridRowSelectionModel } from "@mui/x-data-grid";
import CostModal from "components/costModal/costModal";
import CostTable from "components/DataTable/CostTable";
import React, { useState } from "react";
import { useGetOrders } from "services/hooks/useGetOrders";
import { usePostCost } from "services/hooks/usePostCost";
import { exportToExcel, separateProductCosts } from "utils/helpers";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./style.css";
import { ISOdateFormatter } from "utils/helpers";

const Cost = () => {
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [page, setPage] = React.useState(0);
  const [rowSelectionModel, setRowSelectionModel] =
    React.useState<GridRowSelectionModel>([]);
  const date = new Date();
  const previousMonth = new Date(date.setMonth(date.getMonth() - 1));
  const [dateRange, setDateRange] = useState([previousMonth, new Date()]);
  const [startDate, endDate] = dateRange;

  const { mutateAsync: cost, isPending } = usePostCost();

  const { data, isFetching } = useGetOrders({
    offset: page * rowsPerPage,
    limit: rowsPerPage,
    comprador: "",
    fecha: "",
    estado: "",
    desde: ISOdateFormatter(startDate as unknown as string, true),
    hasta: ISOdateFormatter(endDate as unknown as string, true),
  });

  const onChangePagination = (pagination: GridPaginationModel) => {
    if (page !== pagination.page) {
      setPage(pagination.page);
      return;
    }
    if (rowsPerPage !== pagination.pageSize)
      setRowsPerPage(pagination.pageSize);
  };

  const calculate = () => {
    cost({
      ids: [...(rowSelectionModel as Array<string>)],
    }).then((response) => {
      exportToExcel(separateProductCosts(response.data), "Prueba de exel");
    });
  };

  return (
    <CustomContainer>
      <Typography component="h1" variant="h5" gutterBottom>
        Costo
      </Typography>
      <Grid container sx={{ mb: 1 }}>
        <CostModal />
        <Button
          sx={{ ml: 1 }}
          variant="contained"
          onClick={calculate}
          disabled={!rowSelectionModel.length || isPending || isFetching}
        >
          Calcular costo
        </Button>
      </Grid>
      <Divider />
      <Box sx={{ my: 2, zIndex: 999 }}>
          <DatePicker
            className="custom-date-picker"
            dateFormat="yyyy/MM/dd"
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            onChange={(update: any) => {
              setDateRange(update);
            }}
            isClearable={true}
          />
        </Box>

      <CostTable
        isLoading={isFetching || isPending}
        data={data?.response ?? []}
        pagination={{
          page,
          pageSize: rowsPerPage,
        }}
        count={data?.total ?? 0}
        onChangePagination={onChangePagination}
        rowSelectionModel={rowSelectionModel}
        setRowSelectionModel={setRowSelectionModel}
      />
    </CustomContainer>
  );
};

export default Cost;

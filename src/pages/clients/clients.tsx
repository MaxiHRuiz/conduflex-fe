import { Box, Typography, Button, TextField } from "@mui/material";
import CustomContainer from "../../components/customContainer/CustomContainer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import { GridPaginationModel } from "@mui/x-data-grid";
import { useGetClients } from "services/hooks/useGetClients";
import ClientTable from "components/DataTable/ClientTable";
import { IClient } from "types/client";

interface IClientProps {
  isOrderTable?: boolean;
  onHandleClient?: (client: IClient) => void;
}

export const Clients = ({ isOrderTable, onHandleClient }: IClientProps) => {
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [page, setPage] = React.useState(0);
  const navigate = useNavigate();

  const [nombre, setNombre] = useState<string>("");

  const { data, isFetching } = useGetClients({
    nombre,
    offset: page * rowsPerPage,
    limit: rowsPerPage,
  });

  const onChangePagination = (pagination: GridPaginationModel) => {
    if (page !== pagination.page) {
      setPage(pagination.page);
      return;
    }
    if (rowsPerPage !== pagination.pageSize)
      setRowsPerPage(pagination.pageSize);
  };

  const onChangeCompradorSearch = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNombre(e.target.value);
  };

  return (
    <CustomContainer>
      <Box
        sx={{
          mb: 1,
        }}
      >
        <Typography component="h1" variant="h5" gutterBottom>
          Clientes
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              gap: 1,
              flexWrap: "wrap",
            }}
          >
            <TextField
              value={nombre}
              onChange={onChangeCompradorSearch}
              size="small"
              label="Cliente"
              color="secondary"
            />
          </Box>

          {!isOrderTable && (
            <Box sx={{ flexShrink: 0 }}>
              <Button
                variant="contained"
                disableElevation
                color="secondary"
                onClick={() => navigate("/clientes/crear")}
              >
                Agregar
              </Button>
            </Box>
          )}
        </Box>
      </Box>
      <ClientTable
        onHandleClient={onHandleClient}
        isOrderTable={isOrderTable}
        data={data?.response ?? []}
        count={data?.total ?? 0}
        isLoading={isFetching}
        pagination={{
          page,
          pageSize: rowsPerPage,
        }}
        onChangePagination={onChangePagination}
      />
    </CustomContainer>
  );
};

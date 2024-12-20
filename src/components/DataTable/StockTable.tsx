import {
  DataGrid,
  GridColDef,
  GridRowSelectionModel,
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
} from "@mui/x-data-grid";
import Delete from "../actions/delete";
import Edit from "../actions/edit";
import { IDataTableProps } from "./IDataTableProps";
import { esES } from "@mui/x-data-grid/locales";
import { IStock } from "types/stock";
import Show from "../actions/show";
import QR from "components/actions/QR";
import { REACT_APP_URL } from "lib/constanst";
import { useState } from "react";

const formType = "stock";

const columns: GridColDef[] = [
  {
    field: "actions",
    type: "actions",
    headerName: "Acciones",
    width: 150,
    getActions: (props) => [
      <Show
        buttonType="gridAction"
        stockId={props.row.id}
        productId={props.row.product_id}
        formType={formType}
      />,
      // <Edit
      //   buttonType="gridAction"
      //   stockId={props.row.id}
      //   productId={props.row.product_id}
      //   formType={formType}
      // />,
      <Delete
        buttonType="gridAction"
        stockId={props.row.id}
        productId={props.row.product_id}
        formType={formType}
      />,
      <QR
        value={`${REACT_APP_URL}/productos/${props.row.product_id}/stocks/${props.row.id}`}
        stockId={props.row.id}
      />,
    ],
  },
  {
    field: "id",
    headerName: "Orden de produccion",
    sortable: false,
    disableColumnMenu: true,
    width: 170,
  },
  {
    field: "product_id",
    headerName: "Código",
    sortable: false,
    disableColumnMenu: true,
    width: 180,
  },
  {
    field: "descripcion",
    headerName: "Descripcion",
    sortable: false,
    disableColumnMenu: true,
    width: 180,
  },
  {
    field: "cantidad_metros",
    headerName: "Metros iniciales",
    sortable: false,
    disableColumnMenu: true,
    width: 130,
  },
  {
    field: "cantidad_metros_vendidos",
    headerName: "Metros vendidos",
    sortable: false,
    disableColumnMenu: true,
    width: 130,
  },
  {
    field: "cantidad_metros_restantes",
    headerName: "Metros restantes",
    sortable: false,
    disableColumnMenu: true,
    width: 130,
  },
  {
    field: "detalle",
    headerName: "Detalle",
    sortable: false,
    disableColumnMenu: true,
    width: 220,
  },
];

export default function StockTable({
  data: stocks,
  isLoading,
  pagination,
  count,
  onChangePagination,
  rowSelectionModel,
  setRowSelectionModel
}: IDataTableProps<IStock>) {
  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarColumnsButton
          slotProps={{
            button: { color: "secondary" },
          }}
        />
        <GridToolbarDensitySelector
          slotProps={{
            button: { color: "secondary" },
          }}
        />
      </GridToolbarContainer>
    );
  }

  return (
    <DataGrid
      autoHeight
      rows={stocks}
      columns={columns}
      rowCount={count}
      loading={isLoading}
      localeText={esES.components.MuiDataGrid.defaultProps.localeText}
      paginationModel={pagination}
      onPaginationModelChange={onChangePagination}
      slotProps={{
        loadingOverlay: {
          variant: "linear-progress",
          noRowsVariant: "linear-progress",
        },
      }}
      slots={{
        toolbar: CustomToolbar,
      }}
      initialState={{
        density: "compact",
      }}
      pageSizeOptions={[10, 25, 30, 50, 100]}
      paginationMode="server"
      checkboxSelection
      onRowSelectionModelChange={(newRowSelectionModel) => {
        setRowSelectionModel && setRowSelectionModel(newRowSelectionModel);
      }}
      rowSelectionModel={rowSelectionModel}
    />
  );
}

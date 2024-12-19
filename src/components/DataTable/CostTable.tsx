import {
  DataGrid,
  GridColDef,
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
} from "@mui/x-data-grid";
import { IDataTableProps } from "./IDataTableProps";
import { esES } from "@mui/x-data-grid/locales";
import { IOrder } from "types/order";
import { ISOdateFormatter } from "utils/helpers";

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    sortable: false,
    disableColumnMenu: true,
    width: 170,
  },
  {
    field: "fecha",
    headerName: "Fecha",
    sortable: false,
    disableColumnMenu: true,
    width: 180,
    renderCell: (props) => {
      return ISOdateFormatter(props.row.fecha);
    },
  },
  {
    field: "estado",
    headerName: "Estado",
    sortable: false,
    disableColumnMenu: true,
    width: 180,
  }
];

export default function CostTable({
  isLoading,
  pagination,
  count,
  onChangePagination,
  rowSelectionModel,
  setRowSelectionModel,
  data
}: IDataTableProps<IOrder>) {
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
      rows={data}
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

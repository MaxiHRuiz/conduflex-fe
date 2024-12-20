import {
  DataGrid,
  GridColDef,
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
} from "@mui/x-data-grid";
import { IDataTableProps } from "./IDataTableProps";
import { esES } from "@mui/x-data-grid/locales";
import { formatString, ISOdateFormatter } from "utils/helpers";
import { IFractionate } from "types/fractionate";
import FractionateButton from "components/FractionateButton";

const formType = "stock";

const columns: GridColDef[] = [
  {
    field: "actions",
    type: "actions",
    headerName: "Acciones",
    width: 200,
    getActions: (props) => [
      <FractionateButton id={props.row.id} state={props.row.estado} />
    ],
  },
  {
    field: "id",
    headerName: "ID",
    sortable: false,
    disableColumnMenu: true,
  },
  {
    field: "product_id",
    headerName: "Producto",
    sortable: false,
    disableColumnMenu: true,
  },
  {
    field: "estado",
    headerName: "Estado",
    sortable: false,
    disableColumnMenu: true,
    width: 180,
    renderCell: (props) => formatString(props.row.estado as string)
  },
  {
    field: "stock_id",
    headerName: "Stock",
    sortable: false,
    disableColumnMenu: true,
  },
  {
    field: "cantidad",
    headerName: "Cantidad mts.",
    sortable: false,
    disableColumnMenu: true,
  },
  {
    field: "email",
    headerName: "Email",
    sortable: false,
    disableColumnMenu: true,
  },
  {
    field: "fecha",
    headerName: "Fecha",
    sortable: false,
    disableColumnMenu: true,
    renderCell: (props) => {
      return ISOdateFormatter(props.row.fecha);
    },
  },
];

export default function FractionateTable({
  data: fractionate,
  isLoading,
  pagination,
  count,
  onChangePagination,
}: IDataTableProps<IFractionate>) {
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
      rows={fractionate.map((value, index) => {
        return { ...value, id: index + 1 };
      })}
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
      pageSizeOptions={[10, 30, 50]}
      paginationMode="server"
    />
  );
}



import {
  DataGrid,
  GridColDef,
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
} from "@mui/x-data-grid";
import Delete from "../actions/delete";
import Add from "../actions/show";
import Edit from "../actions/edit";
import { IOrderTableProps, IStockTableProps } from "./IDataTableProps";
import { esES } from '@mui/x-data-grid/locales';
import Status from "components/Status";

const columns: GridColDef[] = [
  {
    field: "actions",
    type: "actions",
    headerName: "Acciones",
    width: 120,
    getActions: (props) => [
      <Add buttonType="gridAction" code={props.row.id} formType="order" />,
      <Edit buttonType="gridAction" code={props.row.id} formType="order" />,
      <Delete
        buttonType="gridAction"
        code={props.row.id}
        formType="order"
      />,
    ],
  },
  {
    field: "id",
    headerName: "Orden de producción",
    sortable: false,
    disableColumnMenu: true,
    width: 180
  },
  {
    field: "status",
    headerName: "Estado de pedido",
    sortable: false,
    disableColumnMenu: true,
    renderCell: (props) => {
      return <Status status={props.row.status } />
    }
  },
  {
    field: "vendedor",
    headerName: "Vendedor",
    sortable: false,
    disableColumnMenu: true,
    width: 180
  },
];

export default function OrderTable({ order }: IOrderTableProps) {
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
      rows={order}
      columns={columns}
      rowCount={order.length}
      localeText={esES.components.MuiDataGrid.defaultProps.localeText}
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
        pagination: {
          paginationModel: { page: 0, pageSize: 5 },
        },
      }}
      pageSizeOptions={[5, 10]}
    />
  );
}

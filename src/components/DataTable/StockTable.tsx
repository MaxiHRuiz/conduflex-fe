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
import { IStockTableProps } from "./IDataTableProps";
import { esES } from '@mui/x-data-grid/locales';

const columns: GridColDef[] = [
  {
    field: "actions",
    type: "actions",
    headerName: "Acciones",
    width: 120,
    getActions: (props) => [
      <Edit buttonType="gridAction" code={props.row.id} formType="stock" />,
      <Delete
        buttonType="gridAction"
        code={props.row.id}
        formType="stock"
      />,
    ],
  },
  {
    field: "id",
    headerName: "Orden de produccion",
    sortable: false,
    disableColumnMenu: true,
    width: 170
  },
  {
    field: "codigo",
    headerName: "código",
    sortable: false,
    disableColumnMenu: true,
  },  {
    field: "descripcion",
    headerName: "Descripcion",
    sortable: false,
    disableColumnMenu: true,
    width: 180
  },
  {
    field: "cantidad_metros",
    headerName: "metros",
    sortable: false,
    disableColumnMenu: true,
  },
  {
    field: "cantidad_metros_vendidos",
    headerName: "Metros vendidos",
    sortable: false,
    disableColumnMenu: true,
    width: 130
  },
  {
    field: "detalle",
    headerName: "Detalle",
    sortable: false,
    disableColumnMenu: true,
    width: 220
  },
];

export default function StockTable({ stock }: IStockTableProps) {
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
      rows={stock}
      columns={columns}
      rowCount={stock.length}
      localeText={esES.components.MuiDataGrid.defaultProps.localeText}
      // loading
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

import {
  DataGrid,
  GridColDef,
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
} from "@mui/x-data-grid";
import { IProduct } from "dtos/product.dto";
import Stock from "../Stock";
import Delete from "../actions/delete";
import Add from "../actions/show";
import Edit from "../actions/edit";
import { IDataTableProps } from "./IDataTableProps";
import { esES } from '@mui/x-data-grid/locales';

const columns: GridColDef[] = [
  {
    field: "actions",
    type: "actions",
    headerName: "Acciones",
    width: 120,
    getActions: (props) => [
      <Add buttonType="gridAction" code={props.row.codigo} formType="product" />,
      <Edit buttonType="gridAction" code={props.row.codigo} formType="product"/>,
      <Delete buttonType="gridAction" code={props.row.codigo}formType="product"/>,
    ],
  },
  {
    field: "codigo",
    headerName: "Código",
    sortable: false,
    disableColumnMenu: true,
  },
  {
    field: "descripcion",
    headerName: "Descripcion",
    sortable: false,
    disableColumnMenu: true,
  },
  {
    field: "precio",
    headerName: "Precio",
    sortable: false,
    disableColumnMenu: true,
  },
  {
    field: "stock",
    headerName: "Stock",
    sortable: false,
    disableColumnMenu: true,
    renderCell: (props) => {
      return (
        <Stock inStock={props.value} />
      );
    },
  },
  {
    field: "espesor_aislacion_promedio",
    headerName: "Espesor aislacion_promedio",
    sortable: false,
    disableColumnMenu: true,
  },
  {
    field: "espesor_aislacion_minimo",
    headerName: "Espesor aislacion_minimo",
    sortable: false,
    disableColumnMenu: true,
  },
  {
    field: "espesor_envoltura_promedio",
    headerName: "Espesor envoltura_promedio",
    sortable: false,
    disableColumnMenu: true,
  },
  {
    field: "espesor_envoltura_minimo",
    headerName: "Espesor envoltura_minimo",
    sortable: false,
    disableColumnMenu: true,
  },
  {
    field: "diametro_nominal",
    headerName: "Diametro nominal",
    sortable: false,
    disableColumnMenu: true,
  },
  {
    field: "diametro_maximo_extremo",
    headerName: "Diametro maximo_extremo",
    sortable: false,
    disableColumnMenu: true,
  },
  {
    field: "resist_aislacion_70c",
    headerName: "Resist aislacion_70c",
    sortable: false,
    disableColumnMenu: true,
  },
  {
    field: "tension_electrodos",
    headerName: "Tension electrodos",
    sortable: false,
    disableColumnMenu: true,
  },
  {
    field: "resist_electrica_20c",
    headerName: "Resist electrica_20c",
    sortable: false,
    disableColumnMenu: true,
  },
  {
    field: "tension_en_agua",
    headerName: "Tension en_agua",
    sortable: false,
    disableColumnMenu: true,
  },
  {
    field: "cantidad_hilos",
    headerName: "Cantidad hilos",
    sortable: false,
    disableColumnMenu: true,
  },
  {
    field: "diametros_hilos",
    headerName: "Diametros hilos",
    sortable: false,
    disableColumnMenu: true,
  },
  {
    field: "diametro_cuerda",
    headerName: "Diametro cuerda",
    sortable: false,
    disableColumnMenu: true,
  },
  {
    field: "pico_cuerda",
    headerName: "Pico cuerda",
    sortable: false,
    disableColumnMenu: true,
  },
  {
    field: "diametro_conductor_calculado",
    headerName: "Diametro conductor_calculado",
    sortable: false,
    disableColumnMenu: true,
  },
  {
    field: "diametro_conductor_Produccion",
    headerName: "Diametro conductor_produccion",
    sortable: false,
    disableColumnMenu: true,
  },
  {
    field: "matriz",
    headerName: "Matriz",
    sortable: false,
    disableColumnMenu: true,
  },
  {
    field: "cantidad_almas",
    headerName: "Cantidad almas",
    sortable: false,
    disableColumnMenu: true,
  },
  {
    field: "diametro_cableado",
    headerName: "Diametro cableado",
    sortable: false,
    disableColumnMenu: true,
  },
  {
    field: "pico_relleno",
    headerName: "Pico relleno",
    sortable: false,
    disableColumnMenu: true,
  },
  {
    field: "diametro_relleno_calculado",
    headerName: "Diametro relleno_calculado",
    sortable: false,
    disableColumnMenu: true,
  },
  {
    field: "diametro_relleno_produccion",
    headerName: "Diametro relleno_produccion",
    sortable: false,
    disableColumnMenu: true,
  },
  {
    field: "espesor",
    headerName: "Espesor",
    sortable: false,
    disableColumnMenu: true,
  },
  {
    field: "diametro_sobre_fleje",
    headerName: "Diametro sobre_fleje",
    sortable: false,
    disableColumnMenu: true,
  },
  {
    field: "diametro_envoltura_calculado",
    headerName: "Diametro envoltura_calculado",
    sortable: false,
    disableColumnMenu: true,
  },
  {
    field: "diametro_envoltura_produccion",
    headerName: "Diametro envoltura_produccion",
    sortable: false,
    disableColumnMenu: true,
  },
  {
    field: "matriz_envoltura",
    headerName: "Matriz envoltura",
    sortable: false,
    disableColumnMenu: true,
  },
  {
    field: "kgs_a",
    headerName: "Kgs a",
    sortable: false,
    disableColumnMenu: true,
  },
  {
    field: "kgs_r",
    headerName: "Kgs r",
    sortable: false,
    disableColumnMenu: true,
  },
  {
    field: "kgs_v",
    headerName: "Kgs v",
    sortable: false,
    disableColumnMenu: true,
  },
  {
    field: "kgs_cu",
    headerName: "Kgs cu",
    sortable: false,
    disableColumnMenu: true,
  },
  {
    field: "kgs_totales",
    headerName: "Kgs totales",
    sortable: false,
    disableColumnMenu: true,
  },
  {
    field: "kgs_terminado",
    headerName: "Kgs terminado",
    sortable: false,
    disableColumnMenu: true,
  },
  {
    field: "kgs_produccion",
    headerName: "Kgs produccion",
    sortable: false,
    disableColumnMenu: true,
  },
  {
    field: "kgs_armadura_metalica",
    headerName: "Kgs armadura_metalica",
    sortable: false,
    disableColumnMenu: true,
  },
  {
    field: "paso",
    headerName: "Paso",
    sortable: false,
    disableColumnMenu: true,
  },
  {
    field: "matriz_relleno",
    headerName: "Matriz relleno",
    sortable: false,
    disableColumnMenu: true,
  },
  {
    field: "pico",
    headerName: "Pico",
    sortable: false,
    disableColumnMenu: true,
  },
  {
    field: "obs1",
    headerName: "Obs1",
    sortable: false,
    disableColumnMenu: true,
  },
  {
    field: "obs2",
    headerName: "Obs2",
    sortable: false,
    disableColumnMenu: true,
  },
  {
    field: "obs3",
    headerName: "Obs3",
    sortable: false,
    disableColumnMenu: true,
  },
  {
    field: "paso_final",
    headerName: "Paso final",
    sortable: false,
    disableColumnMenu: true,
  },
];

export default function DataTable({product}: IDataTableProps) {
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
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        getRowId={(row: IProduct) => row.codigo}
        rows={product}
        columns={columns}
        localeText={esES.components.MuiDataGrid.defaultProps.localeText}
        loading={false}
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
    </div>
  );
}

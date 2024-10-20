import {
  DataGrid,
  GridColDef,
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
} from "@mui/x-data-grid";
import Stock from "../Stock";
import Delete from "../actions/delete";
import Show from "../actions/show";
import Edit from "../actions/edit";
import { IDataTableProps } from "./IDataTableProps";
import { esES } from "@mui/x-data-grid/locales";
import { IProduct } from "types/product";
import Add from "components/actions/add";

const columns: GridColDef[] = [
  {
    field: "actions",
    type: "actions",
    headerName: "Acciones",
    width: 200,
    getActions: (props) => [
      <Show
        buttonType="gridAction"
        productId={props.row.id}
        formType="product"
      />,
      <Edit
        buttonType="gridAction"
        productId={props.row.id}
        formType="product"
      />,
      <Delete
        buttonType="gridAction"
        productId={props.row.id}
        formType="product"
      />,
      <Add buttonType="gridAction" productId={props.row.id} />,
    ],
  },
  {
    field: "id",
    headerName: "Código",
    sortable: false,
    disableColumnMenu: true,
  },
  {
    field: "descripcion",
    headerName: "Descripcion",
    sortable: false,
    width: 200,
    disableColumnMenu: true,
  },
  {
    field: "precio",
    headerName: "Precio x m.",
    sortable: false,
    disableColumnMenu: true,
    renderCell: (props) => {
      return new Intl.NumberFormat("es-AR", {
        style: "currency",
        currency: "ARS",
      }).format(props.row.precio);
    },
  },
  {
    field: "hay_stock",
    headerName: "Stock",
    sortable: false,
    disableColumnMenu: true,
    renderCell: (props) => {
      return <Stock inStock={props.value} />;
    },
  },
  // {
  //   field: "espesor_aislacion_promedio",
  //   headerName: "Espesor aislacion_promedio",
  //   sortable: false,
  //   disableColumnMenu: true,
  // },
  // {
  //   field: "espesor_aislacion_minimo",
  //   headerName: "Espesor aislacion_minimo",
  //   sortable: false,
  //   disableColumnMenu: true,
  // },
  // {
  //   field: "espesor_envoltura_promedio",
  //   headerName: "Espesor envoltura_promedio",
  //   sortable: false,
  //   disableColumnMenu: true,
  // },
  // {
  //   field: "espesor_envoltura_minimo",
  //   headerName: "Espesor envoltura_minimo",
  //   sortable: false,
  //   disableColumnMenu: true,
  // },
  // {
  //   field: "diametro_nominal",
  //   headerName: "Diametro nominal",
  //   sortable: false,
  //   disableColumnMenu: true,
  // },
  // {
  //   field: "diametro_maximo_extremo",
  //   headerName: "Diametro maximo_extremo",
  //   sortable: false,
  //   disableColumnMenu: true,
  // },
  // {
  //   field: "resist_aislacion_70c",
  //   headerName: "Resist aislacion_70c",
  //   sortable: false,
  //   disableColumnMenu: true,
  // },
  // {
  //   field: "tension_electrodos",
  //   headerName: "Tension electrodos",
  //   sortable: false,
  //   disableColumnMenu: true,
  // },
  // {
  //   field: "resist_electrica_20c",
  //   headerName: "Resist electrica_20c",
  //   sortable: false,
  //   disableColumnMenu: true,
  // },
  // {
  //   field: "tension_en_agua",
  //   headerName: "Tension en_agua",
  //   sortable: false,
  //   disableColumnMenu: true,
  // },
  // {
  //   field: "cantidad_hilos",
  //   headerName: "Cantidad hilos",
  //   sortable: false,
  //   disableColumnMenu: true,
  // },
  // {
  //   field: "diametros_hilos",
  //   headerName: "Diametros hilos",
  //   sortable: false,
  //   disableColumnMenu: true,
  // },
  // {
  //   field: "diametro_cuerda",
  //   headerName: "Diametro cuerda",
  //   sortable: false,
  //   disableColumnMenu: true,
  // },
  // {
  //   field: "pico_cuerda",
  //   headerName: "Pico cuerda",
  //   sortable: false,
  //   disableColumnMenu: true,
  // },
  // {
  //   field: "diametro_conductor_calculado",
  //   headerName: "Diametro conductor_calculado",
  //   sortable: false,
  //   disableColumnMenu: true,
  // },
  // {
  //   field: "diametro_conductor_Produccion",
  //   headerName: "Diametro conductor_produccion",
  //   sortable: false,
  //   disableColumnMenu: true,
  // },
  // {
  //   field: "matriz",
  //   headerName: "Matriz",
  //   sortable: false,
  //   disableColumnMenu: true,
  // },
  // {
  //   field: "cantidad_almas",
  //   headerName: "Cantidad almas",
  //   sortable: false,
  //   disableColumnMenu: true,
  // },
  // {
  //   field: "diametro_cableado",
  //   headerName: "Diametro cableado",
  //   sortable: false,
  //   disableColumnMenu: true,
  // },
  // {
  //   field: "pico_relleno",
  //   headerName: "Pico relleno",
  //   sortable: false,
  //   disableColumnMenu: true,
  // },
  // {
  //   field: "diametro_relleno_calculado",
  //   headerName: "Diametro relleno_calculado",
  //   sortable: false,
  //   disableColumnMenu: true,
  // },
  // {
  //   field: "diametro_relleno_produccion",
  //   headerName: "Diametro relleno_produccion",
  //   sortable: false,
  //   disableColumnMenu: true,
  // },
  // {
  //   field: "espesor",
  //   headerName: "Espesor",
  //   sortable: false,
  //   disableColumnMenu: true,
  // },
  // {
  //   field: "diametro_sobre_fleje",
  //   headerName: "Diametro sobre_fleje",
  //   sortable: false,
  //   disableColumnMenu: true,
  // },
  // {
  //   field: "diametro_envoltura_calculado",
  //   headerName: "Diametro envoltura_calculado",
  //   sortable: false,
  //   disableColumnMenu: true,
  // },
  // {
  //   field: "diametro_envoltura_produccion",
  //   headerName: "Diametro envoltura_produccion",
  //   sortable: false,
  //   disableColumnMenu: true,
  // },
  // {
  //   field: "matriz_envoltura",
  //   headerName: "Matriz envoltura",
  //   sortable: false,
  //   disableColumnMenu: true,
  // },
  // {
  //   field: "kgs_a",
  //   headerName: "Kgs a",
  //   sortable: false,
  //   disableColumnMenu: true,
  // },
  // {
  //   field: "kgs_r",
  //   headerName: "Kgs r",
  //   sortable: false,
  //   disableColumnMenu: true,
  // },
  // {
  //   field: "kgs_v",
  //   headerName: "Kgs v",
  //   sortable: false,
  //   disableColumnMenu: true,
  // },
  // {
  //   field: "kgs_cu",
  //   headerName: "Kgs cu",
  //   sortable: false,
  //   disableColumnMenu: true,
  // },
  // {
  //   field: "kgs_totales",
  //   headerName: "Kgs totales",
  //   sortable: false,
  //   disableColumnMenu: true,
  // },
  // {
  //   field: "kgs_terminado",
  //   headerName: "Kgs terminado",
  //   sortable: false,
  //   disableColumnMenu: true,
  // },
  // {
  //   field: "kgs_produccion",
  //   headerName: "Kgs produccion",
  //   sortable: false,
  //   disableColumnMenu: true,
  // },
  // {
  //   field: "kgs_armadura_metalica",
  //   headerName: "Kgs armadura_metalica",
  //   sortable: false,
  //   disableColumnMenu: true,
  // },
  // {
  //   field: "paso",
  //   headerName: "Paso",
  //   sortable: false,
  //   disableColumnMenu: true,
  // },
  // {
  //   field: "matriz_relleno",
  //   headerName: "Matriz relleno",
  //   sortable: false,
  //   disableColumnMenu: true,
  // },
  // {
  //   field: "pico",
  //   headerName: "Pico",
  //   sortable: false,
  //   disableColumnMenu: true,
  // },
  // {
  //   field: "obs1",
  //   headerName: "Obs1",
  //   sortable: false,
  //   disableColumnMenu: true,
  // },
  // {
  //   field: "obs2",
  //   headerName: "Obs2",
  //   sortable: false,
  //   disableColumnMenu: true,
  // },
  // {
  //   field: "obs3",
  //   headerName: "Obs3",
  //   sortable: false,
  //   disableColumnMenu: true,
  // },
  // {
  //   field: "paso_final",
  //   headerName: "Paso final",
  //   sortable: false,
  //   disableColumnMenu: true,
  // },
];

export default function DataTable({
  data: product,
  isLoading,
  pagination,
  count,
  onChangePagination,
  rowsPerPageOptions,
}: IDataTableProps<IProduct>) {
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
        autoHeight
        rows={product}
        columns={columns}
        rowCount={count}
        localeText={esES.components.MuiDataGrid.defaultProps.localeText}
        loading={isLoading}
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
        pageSizeOptions={rowsPerPageOptions ?? [10, 25, 30]}
        paginationMode="server"
      />
    </div>
  );
}

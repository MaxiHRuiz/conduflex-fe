import {
    DataGrid,
    GridColDef,
    GridSlotsComponentsProps,
  } from "@mui/x-data-grid";
import { ICustomCardTableProps } from "./ICustomCardProps";
import { Box } from "@mui/material";
import { useCallback } from "react";

type FooterStatus = 'connected' | 'disconnected';

declare module '@mui/x-data-grid' {
    interface FooterPropsOverrides {
      status: FooterStatus;
    }
  }
  
  const columns: GridColDef[] = [
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

  // export function CustomFooterStatusComponent(
  //   props: NonNullable<GridSlotsComponentsProps['footer']>,
  // ) {
  //   return (
  //     <></>
  //   );
  // }
  
  export default function CustomCardTable({product}: ICustomCardTableProps) {

    return (
        <DataGrid sx={{mt: 1}}
          autoHeight
          rows={[product]}
          columns={columns}
          hideFooter
          slotProps={{
            loadingOverlay: {
              variant: "linear-progress",
              noRowsVariant: "linear-progress",
            },
          }}
          initialState={{
            density: "compact"
          }}
        />
    );
  }
  
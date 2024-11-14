import {
  DataGrid,
  GridActionsCellItem,
  GridColDef,
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
} from "@mui/x-data-grid";
import Delete from "../actions/delete";
import Show from "../actions/show";
import Edit from "../actions/edit";
import { IDataTableProps } from "./IDataTableProps";
import { esES } from "@mui/x-data-grid/locales";
import { IClient } from "types/client";
import { useCallback } from "react";
import Tooltip from "@mui/material/Tooltip";
import CheckIcon from "@mui/icons-material/Check";

const formType = "client";

export default function ClientTable({
  data: clients,
  isLoading,
  pagination,
  count,
  onChangePagination,
  rowsPerPageOptions,
  isOrderTable,
  onHandleClient
}: IDataTableProps<IClient> & {
  isOrderTable?: boolean;
  onHandleClient?: (client: IClient) => void;
}) {
  const columns: () => GridColDef[] = useCallback(
    () => [
      {
        field: "actions",
        type: "actions",
        headerName: isOrderTable ? "Acción" : "Acciones",
        width: isOrderTable ? 100 : 140,
        getActions: (props) =>
          isOrderTable
            ? [
                <>
                  <Tooltip title={"Seleccionar"}>
                    <GridActionsCellItem
                      icon={<CheckIcon />}
                      label={"Seleccionar"}
                      onClick={() => onHandleClient?.(props.row)}
                    />
                  </Tooltip>
                </>,
              ]
            : [
                <Show
                  buttonType="gridAction"
                  clientId={props.row.id}
                  formType={formType}
                />,
                <Edit
                  buttonType="gridAction"
                  clientId={props.row.id}
                  formType={formType}
                />,
                <Delete
                  buttonType="gridAction"
                  clientId={props.row.id}
                  formType={formType}
                />,
              ],
      },
      {
        field: "nombre",
        headerName: "Nombre",
        sortable: false,
        width: 250,
        disableColumnMenu: true,
      },
      {
        field: "cuit",
        headerName: "CUIT",
        sortable: false,
        width: 180,
        disableColumnMenu: true,
      },
      {
        field: "telefono",
        headerName: "Telefono",
        sortable: false,
        disableColumnMenu: true,
      },
      {
        field: "email",
        headerName: "Email",
        sortable: false,
        width: 200,
        disableColumnMenu: true,
      },
      {
        field: "notas",
        headerName: "Notas",
        sortable: false,
        width: 200,
        disableColumnMenu: true,
      },
    ],
    [isOrderTable]
  );

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
        rows={clients}
        columns={columns()}
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

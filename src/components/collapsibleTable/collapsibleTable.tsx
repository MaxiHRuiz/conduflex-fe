import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { IOrder } from "types/order";
import { useGetOrders } from "services/hooks/useGetOrders";
import Loading from "components/Loading";
import {
  Button,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TablePagination,
  TextField,
  Typography,
} from "@mui/material";
import Show from "components/actions/show";
import { ISOdateFormatter } from "utils/helpers";
import OrderState from "components/OrderState";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./style.css";
import { useNavigate } from "react-router-dom";

function Row(props: { row: IOrder }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>
          <Show formType="order" orderId={row.id} />
        </TableCell>
        <TableCell component="th" scope="row">
          {row.id}
        </TableCell>
        <TableCell>{row.vendedor as string}</TableCell>
        <TableCell>{ISOdateFormatter(row.fecha)}</TableCell>
        <TableCell>{<OrderState state={row.estado} />}</TableCell>
        <TableCell>{row.comprador.nombre}</TableCell>
        <TableCell>{row.actualizado_por}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Código</TableCell>
                    <TableCell>Descripcion</TableCell>
                    <TableCell>Fraccionable</TableCell>
                    <TableCell>Metros</TableCell>
                    {/* <TableCell>Precio por m.</TableCell> */}
                    <TableCell>Detalle</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.productos.map((stockRow) => (
                    <TableRow key={stockRow.id}>
                      <TableCell component="th" scope="row">
                        {stockRow.id}
                      </TableCell>
                      <TableCell>{stockRow.product_id}</TableCell>
                      <TableCell>{stockRow.descripcion}</TableCell>
                      <TableCell>
                        {stockRow.es_fraccionable ? "SI" : "NO"}
                      </TableCell>
                      <TableCell>{stockRow.cantidad_metros}</TableCell>
                      {/* <TableCell>{stockRow.precio}</TableCell> */}
                      <TableCell>{stockRow.detalle}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function CollapsibleTable() {
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [page, setPage] = React.useState(0);
  const [comprador, setComprador] = useState<string>("");
  const [estado, setEstado] = useState<string>("todos");
  const date = new Date();
  const previousMonth = new Date(date.setMonth(date.getMonth() - 1));
  const [dateRange, setDateRange] = useState([previousMonth, new Date()]);
  const [startDate, endDate] = dateRange;
  const navigate = useNavigate();

  const { data, isFetching, isError } = useGetOrders({
    offset: page * rowsPerPage,
    limit: rowsPerPage,
    comprador,
    fecha: "",
    estado: estado === "todos" ? "" : estado,
    desde: ISOdateFormatter(startDate as unknown as string, true),
    hasta: ISOdateFormatter(endDate as unknown as string, true),
  });

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const onChangeIdSearch = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setComprador(e.target.value);
  };

  const handleStatusChange = (event: SelectChangeEvent) => {
    setEstado(event.target.value as string);
  };

  if (isError)
    return <Typography>Hubo un error al cargar los pedidos</Typography>;

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          mb: 1,
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
            value={comprador}
            onChange={onChangeIdSearch}
            size="small"
            label="Cliente"
          />
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => navigate("/pedidos/costeo")}
          >
            Costeo
          </Button>
        </Box>

        <Box
          sx={{
            flexShrink: 0,
            flexDirection: "row",
            display: "flex",
            gap: 1,
          }}
        >
          <FormControl fullWidth size="small" sx={{ width: 200 }}>
            <InputLabel id="available-select-label">Estado</InputLabel>
            <Select
              labelId="available-select-label"
              id="available-select"
              value={estado}
              label="Estado"
              onChange={handleStatusChange}
            >
              <MenuItem value="todos">Todos</MenuItem>
              <MenuItem value="finalizado">Finalizado</MenuItem>
              <MenuItem value="pendiente">Pendiente</MenuItem>
              <MenuItem value="aprobado">Aprobado</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Divider />
      <Box sx={{ my: 2, zIndex: 999 }}>
        <DatePicker
          className="custom-date-picker"
          dateFormat="yyyy/MM/dd"
          selectsRange={true}
          startDate={startDate}
          endDate={endDate}
          onChange={(update: any) => {
            setDateRange(update);
          }}
          isClearable={true}
        />
      </Box>
      <Paper sx={{ width: "100%", mb: 2 }}>
        {isFetching ? (
          <Loading />
        ) : (
          <TableContainer>
            <Table aria-label="collapsible table" size="small">
              <TableHead>
                <TableRow>
                  <TableCell />
                  <TableCell />
                  <TableCell>ID</TableCell>
                  <TableCell>Vendedor</TableCell>
                  <TableCell sx={{ minWidth: 100 }}>Fecha</TableCell>
                  <TableCell>Estado</TableCell>
                  <TableCell sx={{ minWidth: 100 }}>Cliente</TableCell>
                  <TableCell sx={{ minWidth: 100 }}>Actualizado por</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.response.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={8} align="center" height={40}>
                      <Typography variant="body1">Sin filas</Typography>
                    </TableCell>
                  </TableRow>
                ) : (
                  data?.response.map((row) => <Row key={row.id} row={row} />)
                )}
              </TableBody>
            </Table>
          </TableContainer>
        )}
        <TablePagination
          rowsPerPageOptions={[10, 25, 30]}
          component="div"
          count={data?.total || 0}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
}

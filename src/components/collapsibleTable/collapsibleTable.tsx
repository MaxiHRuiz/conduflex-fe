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
import { Chip, TablePagination } from "@mui/material";
import Show from "components/actions/show";
import { dateFormatter } from "utils/helpers";
import OrderState from "components/OrderState";

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
        <TableCell>{row.vendedor}</TableCell>
        <TableCell>{dateFormatter(row.fecha)}</TableCell>
        <TableCell>{<OrderState state={row.estado} />}</TableCell>
        <TableCell>{row.actualizado_por}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
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
  const { data, isFetching } = useGetOrders();
  if (isFetching) return <Loading />;
  if (!data) return <></>;
  return (
    <>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <TableContainer>
          <Table aria-label="collapsible table" size="small">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell />
                <TableCell>ID</TableCell>
                <TableCell>Vendedor</TableCell>
                <TableCell>Fecha</TableCell>
                <TableCell>Estado</TableCell>
                <TableCell>Actualizado por</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.response.map((row) => (
                <Row key={row.id} row={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 30]}
          component="div"
          count={data.total}
          rowsPerPage={1}
          page={1}
          onPageChange={() => { }}
          onRowsPerPageChange={() => { }}
        />
      </Paper>
    </>
  );
}

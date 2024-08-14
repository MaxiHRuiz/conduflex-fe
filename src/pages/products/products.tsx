import {
  Box,
  Typography,
  FormControlLabel,
  Switch,
  Button,
  Pagination,
  TablePagination,
} from "@mui/material";
import CustomContainer from "../../components/customContainer/CustomContainer";
import CustomCard from "../../components/customCard/customCard";
import { SyntheticEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useTodo } from "context/TodoContext";
import DataTable from "components/DataTable/DataTable";
import TablePaginationDemo from "components/TablePagination";
import axios from "axios";
import React from "react";
import axiosCore from "services/createAxiosClient";

export const Products = () => {
  const { products } = useTodo();
  const navigate = useNavigate();
  const { tableChecked, setTableChecked } = useTodo();

  const handleChange = (
    event: SyntheticEvent<Element, Event>,
    checked: boolean
  ) => {
    setTableChecked(checked);
  };

  const [post, setPost] = React.useState<{limit: string}>({limit: ''});

  React.useEffect(() => {
    axios.get('https://conduflex-be.onrender.com/product/search').then((response) => {
      console.log(response.data)
    });
  }, []);

  return (
    <CustomContainer>
      {/* <Box
        sx={{
          mb: 1,
        }}
      > */}
        {/* <Typography component="h1" variant="h5" gutterBottom>
          Productos
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Box sx={{ width: "100%" }}>
            <FormControlLabel
              value={tableChecked}
              onChange={handleChange}
              control={
                <Switch
                  color="secondary"
                  name="Interruptor para cambiar tabla"
                />
              }
              label="Cambiar tabla"
            />
          </Box>

          <Box sx={{ flexShrink: 0 }}>
            <Button
              variant="contained"
              disableElevation
              color="secondary"
              onClick={() => navigate("/productos/crear")}
            >
              Agregar producto
            </Button>
          </Box>
        </Box>
      </Box>
      {!tableChecked &&
        products.map((x, index) => <CustomCard key={x.codigo} product={x} />)}
      {tableChecked && <DataTable product={products} />} */}
      <Box
        sx={{ width: "100%", py: 1, display: "flex", justifyContent: "center" }}
      >
        <TablePaginationDemo />
      </Box>
    </CustomContainer>
  );
};

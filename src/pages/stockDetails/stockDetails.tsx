import {
    Box,
    Button,
    Checkbox,
    Grid,
    Paper,
    styled,
    TextField,
    Typography,
  } from "@mui/material";
  import CustomContainer from "../../components/customContainer/CustomContainer";
  import { useTodo } from "../../context/TodoContext";
  import { useNavigate, useParams } from "react-router-dom";
  import CustomCard from "../../components/customCard/customCard";
  import { useEffect, useMemo } from "react";
  import StockTable from "components/DataTable/StockTable";
import { StockDetails } from "components/StockDetails";
import { IProduct } from "types/product";
  
  const ShowProduct = () => {
    const { products, stocks, updateProduct } = useTodo();
    const { id } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
      if (!products.find((x: IProduct) => x.id === id)) {
        navigate("/");
      }
    }, [id]);
  
    return (
      <CustomContainer breadCrumbs>
        <Typography component="h1" variant="h5" gutterBottom>
          Detalle
        </Typography>
        <StockDetails />
      </CustomContainer>
    );
  };
  
  export default ShowProduct;
  
import { Routes, Route, Navigate } from "react-router-dom";
import { Products } from "../pages/products/products";
import PrivateRoute from "../components/PrivateRoutes";
import Login from "../pages/login/login";
import NotFound from "../pages/notFound/notFound";
import Orders from "../pages/orders/orders";
import CreateProduct from "pages/createProduct/createProduct";
import ShowProduct from "pages/showProduct/showProduct";
import EditProduct from "pages/editProduct/editProduct";
import CreateStock from "pages/createStock/createStock";
import Stocks from "pages/stocks/stocks";
import ShowOrders from "pages/showOrder/showOrder";
import StockDetails from "pages/stockDetails/stockDetails";
import NewOrder from "pages/newOrder/newOrder";
import { Clients } from "pages/clients/clients";
import ShowClient from "pages/showClient/showClient";
import EditClient from "pages/editClient/editClient";
import CreateClient from "pages/createClient/createClient";
import Fractionates from "pages/fractionates/fractionates";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<Navigate to={"/productos"} />} />
        <Route
          path="/productos/:productId/stocks/crear"
          element={<CreateStock />}
        />
        {/* <Route path="/productos/:productId/stocks/:stockId/editar" element={<EditStock />} /> */}
        <Route
          path="/productos/:productId/stocks/:stockId"
          element={<StockDetails />}
        />
        <Route path="/productos/stocks" element={<Stocks />} />
        <Route path="/productos/crear" element={<CreateProduct />} />
        <Route path="/productos/:productId/editar" element={<EditProduct />} />
        <Route path="/productos/:productId" element={<ShowProduct />} />
        <Route path="/productos" element={<Products />} />
        {/* <Route path="/stocks/:id" element={<Navigate to={'/stocks'} />} /> */}
        <Route path="/pedidos/nuevo" element={<NewOrder />} />
        <Route path="/pedidos/:orderId" element={<ShowOrders />} />
        <Route path="/pedidos" element={<Orders />} />
        <Route path="/clientes" element={<Clients />} />
        <Route path="/clientes/crear" element={<CreateClient />} />
        <Route path="/clientes/:clientId" element={<ShowClient />} />
        <Route path="/clientes/:clientId/editar" element={<EditClient />} />
        <Route path="/fracionamiento" element={<Fractionates />} />
        
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;

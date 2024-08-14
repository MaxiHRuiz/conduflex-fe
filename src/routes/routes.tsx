import { Routes, Route, Navigate } from "react-router-dom"
import { Products } from "../pages/products/products"
import PrivateRoute from "../components/PrivateRoutes"
import Login from "../pages/login/login"
import NotFound from "../pages/notFound/notFound"
import Orders from "../pages/orders/orders"
import CreateProduct from "pages/createProduct/createProduct"
import ShowProduct from "pages/showProduct/showProduct"
import EditProduct from "pages/editProduct/editProduct"
import CreateStock from "pages/createStock/createStock"
import EditStock from "pages/editStock/editStock"
import Stocks from "pages/stocks/stocks"
import ShowOrders from "pages/showOrders/showOrders"
import StockDetails from "pages/stockDetails/stockDetails"

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<Navigate to={'/productos'} />} />
        <Route path="/productos" element={<Products />} />
        <Route path="/productos/crear" element={<CreateProduct />} />
        <Route path="/productos/:id/editar" element={<EditProduct />} />
        <Route path="/productos/:id" element={<ShowProduct />} />
        <Route path="/stocks" element={<Stocks />} />
        <Route path="/stocks/:stock" element={<StockDetails />} />
        <Route path="/stocks/crear" element={<CreateStock />} />
        <Route path="/stocks/:id/editar" element={<EditStock />} />
        <Route path="/stocks/:id" element={<Navigate to={'/stocks'} />} />
        <Route path="/pedidos" element={<Orders />} />
        <Route path="/pedidos/:id" element={<ShowOrders />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
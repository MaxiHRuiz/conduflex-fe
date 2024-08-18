import React, { useContext, useEffect } from "react";
import { TodoContextType } from "../types/todo";
import { IStock } from "dtos/stock.dto";
import { IOrder } from "dtos/order.dto";
import { IProduct } from "types/product";

// const products: Array<IProduct> = [

// ];

// const stocks: Array<IStock> = [];

const orders: Array<IOrder> = [
  {
    id: "0001",
    list: [
      {
        id_stock: "2024070302",
        id_producto: "AAA1",
        descripcion_producto: "cable verde 2mm",
        contindad_producto: 50,
        subStatus: "en_produccion",
      },
      {
        id_stock: "2024070303",
        id_producto: "AAA1",
        descripcion_producto: "cable verde 2mm",
        contindad_producto: 50,
        subStatus: "fraccionado",
      },
      {
        id_stock: "2024070304",
        id_producto: "AAA1",
        descripcion_producto: "cable verde 2mm",
        contindad_producto: 50,
        subStatus: "listo_para_despachar",
      },
      {
        id_stock: "2024070305",
        id_producto: "AAA1",
        descripcion_producto: "cable verde 2mm",
        contindad_producto: 50,
        subStatus: "despachado",
      },
    ],
    status: "aprobado",
    vendedor: "almeida@gmail.com",
  },
  {
    id: "0002",
    list: [
      {
        id_stock: "2024070300",
        id_producto: "AAA1",
        descripcion_producto: "cable verde 2mm",
        contindad_producto: 50,
        subStatus: "fraccionado",
      },
    ],
    status: "pendiente",
    vendedor: "almeida@gmail.com",
  },
  {
    id: "0003",
    list: [
      {
        id_stock: "2024070300",
        id_producto: "AAA1",
        descripcion_producto: "cable verde 2mm",
        contindad_producto: 50,
        subStatus: "fraccionado",
      },
    ],
    status: "aprobado",
    vendedor: "almeida@gmail.com",
  },
  {
    id: "0004",
    list: [
      {
        id_stock: "2024070300",
        id_producto: "AAA1",
        descripcion_producto: "cable verde 2mm",
        contindad_producto: 50,
        subStatus: "despachado",
      },
    ],
    status: "finalizado",
    vendedor: "almeida@gmail.com",
  },
];

const defaultValues: TodoContextType = {
  tableChecked: false,
  setTableChecked: function (value: boolean): void {
    throw new Error("Function not implemented.");
  },
  // products: [],
  // saveProduct: function (product: IProduct): void {
  //   throw new Error("Function not implemented.");
  // },
  // updateProduct: function (codigo: string, product: IProduct): void {
  //   throw new Error("Function not implemented.");
  // },
  // deleteProduct: function (codigo: string): void {
  //   throw new Error("Function not implemented.");
  // },
  // stocks: [],
  // saveStock: function (stock: IStock): void {
  //   throw new Error("Function not implemented.");
  // },
  // updateStock: function (id: string, stock: IStock): void {
  //   throw new Error("Function not implemented.");
  // },
  // deleteStock: function (id: string): void {
  //   throw new Error("Function not implemented.");
  // },
  orders: [],
  saveOrder: function (order: IOrder): void {
    throw new Error("Function not implemented.");
  },
  updateOrder: function (id: string, order: IOrder): void {
    throw new Error("Function not implemented.");
  },
  deleteOrder: function (id: string): void {
    throw new Error("Function not implemented.");
  },
};

export const TodoContext = React.createContext<TodoContextType>(defaultValues);

function getInitialStateTableChecked() {
  const tableCheckedLS = localStorage.getItem("productTable");
  return tableCheckedLS ? JSON.parse(tableCheckedLS) : false;
}

// function getInitialState() {
//   const productsLS = localStorage.getItem("products");
//   return productsLS ? JSON.parse(productsLS) : products;
// }
// function getInitialStateStock() {
//   const stocksLS = localStorage.getItem("stocks");
//   return stocksLS ? JSON.parse(stocksLS) : stocks;
// }

function getInitialStateOrder() {
  const ordersLS = localStorage.getItem("orders");
  return ordersLS ? JSON.parse(ordersLS) : orders;
}

const TodoProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [tableChecked, setTableChecked] = React.useState<boolean>(
    getInitialStateTableChecked
  );
  // const [products, setProducts] =
  //   React.useState<Array<IProduct>>(getInitialState);
  // const [stocks, setStocks] =
  //   React.useState<Array<IStock>>(getInitialStateStock);
  const [orders, setOrders] =
    React.useState<Array<IOrder>>(getInitialStateOrder);

  useEffect(() => {
    localStorage.setItem("productTable", JSON.stringify(tableChecked));
  }, [tableChecked]);

  // useEffect(() => {
  //   localStorage.setItem("products", JSON.stringify(products));
  // }, [products]);

  // useEffect(() => {
  //   localStorage.setItem("stocks", JSON.stringify(stocks));
  // }, [stocks]);

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  // const saveProduct = (newProduct: IProduct) => {
  //   setProducts([...products, newProduct]);
  // };
  // const updateProduct = (codigo: string, newProduct: IProduct) => {
  //   const newProducts = products.map((product: IProduct) => {
  //     if (product.id === codigo) {
  //       return newProduct;
  //     }
  //     return product;
  //   });

  //   setProducts([...newProducts]);
  // };
  // const deleteProduct = (codigo: string) => {
  //   setProducts(
  //     products.filter((product: IProduct) => product.id !== codigo)
  //   );
  // };

  // const saveStock = (newStock: IStock) => {
  //   setStocks([...stocks, newStock]);
  // };
  // const updateStock = (id: string, newStock: IStock) => {
  //   const newStocks = stocks.map((stock: IStock) => {
  //     if (stock.id === id) {
  //       return newStock;
  //     }
  //     return stock;
  //   });

  //   setStocks([...newStocks]);
  // };
  // const deleteStock = (id: string) => {
  //   setStocks(stocks.filter((stock: IStock) => stock.id !== id));
  // };

  const saveOrder = (newOrder: IOrder) => {
    setOrders([...orders, newOrder]);
  };
  const updateOrder = (id: string, newOrder: IOrder) => {
    const newOrders = orders.map((order: IOrder) => {
      if (order.id === id) {
        return newOrder;
      }
      return order;
    });

    setOrders([...newOrders]);
  };
  const deleteOrder = (id: string) => {
    setOrders(orders.filter((order: IOrder) => order.id !== id));
  };

  return (
    <TodoContext.Provider
      value={{
        tableChecked,
        // products,
        // stocks,
        orders,
        // saveProduct,
        // updateProduct,
        // deleteProduct,
        saveOrder,
        updateOrder,
        deleteOrder,
        setTableChecked,
        // saveStock,
        // updateStock,
        // deleteStock,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;

export function useTodo() {
  return useContext(TodoContext);
}

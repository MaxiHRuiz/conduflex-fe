import React, { useContext, useEffect } from "react";
import { TodoContextType } from "../types/todo";
import { IOrder, IProductStock } from "types/order";

const defaultOrder: IOrder = {
  vendedor: "",
  productos: [],
  id: "",
  estado: "",
  actualizado_por: "",
  fecha: "",
  precio: 0,
  comprador: {
    nombre: "",
    cuit: "",
    cp: 0,
    direccion: ""
  }
};

const defaultValues: TodoContextType = {
  tableChecked: false,
  setTableChecked: function (value: boolean): void {
    throw new Error("Function not implemented.");
  },
  order: {
    vendedor: "",
    productos: [],
    id: "",
    estado: "",
    actualizado_por: "",
    fecha: "",
    precio: 0,
    comprador: {
      nombre: "",
      cuit: "",
      cp: 0,
      direccion: ""
    }
  },
  saveNewOrder: (order: IOrder) => {
    throw new Error("Function not implemented.");
  },
  saveOrderProduct: (product: IProductStock) => {
    throw new Error("Function not implemented.");
  },
  updateOrderProduct: (updateProduct: IProductStock) => {
    throw new Error("Function not implemented.");
  },
  deleteOrderProduct: (productId: string) => {
    throw new Error("Function not implemented.");
  },
  deleteOrder: () => {
    throw new Error("Function not implemented.");
  },
};

export const TodoContext = React.createContext<TodoContextType>(defaultValues);

function getInitialStateTableChecked() {
  const tableCheckedLS = localStorage.getItem("productTable");
  return tableCheckedLS ? JSON.parse(tableCheckedLS) : false;
}

function getInitialStateOrder() {
  const ordersLS = localStorage.getItem("order");
  return ordersLS ? JSON.parse(ordersLS) : defaultOrder;
}

const TodoProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [tableChecked, setTableChecked] = React.useState<boolean>(
    getInitialStateTableChecked
  );
  const [order, setOrder] = React.useState<IOrder>(getInitialStateOrder);

  useEffect(() => {
    localStorage.setItem("productTable", JSON.stringify(tableChecked));
  }, [tableChecked]);

  useEffect(() => {
    localStorage.setItem("order", JSON.stringify(order));
  }, [order]);

  const saveNewOrder = (order: IOrder) => setOrder(order);

  const saveOrderProduct = (product: IProductStock) =>
    setOrder({
      ...order,
      productos: [...order.productos, product],
    });

  const updateOrderProduct = (updateProduct: IProductStock) => {
    const productos = order.productos.map((product: IProductStock) => {
      if (product.id === updateProduct.id) {
        return updateProduct;
      }
      return product;
    });

    setOrder({ ...order, productos });
  };

  const deleteOrderProduct = (id: string) =>
    setOrder({
      ...order,
      productos: order.productos.filter(
        (product: IProductStock) => product.id !== id
      ),
    });

  const deleteOrder = () => setOrder(defaultOrder);

  return (
    <TodoContext.Provider
      value={{
        tableChecked,
        order,
        deleteOrder,
        deleteOrderProduct,
        saveNewOrder,
        saveOrderProduct,
        updateOrderProduct,
        setTableChecked,
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

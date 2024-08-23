import React, { useContext, useEffect } from "react";
import { TodoContextType } from "../types/todo";
import { IOrder, IProductStock } from "types/order";

const defaultOrder: IOrder = {
  vendedor: "",
  product_stock: [],
  id: 0,
  estado: "",
  actualizado_por: "",
  fecha: ""
};

const defaultValues: TodoContextType = {
  tableChecked: false,
  setTableChecked: function (value: boolean): void {
    throw new Error("Function not implemented.");
  },
  order: {
    vendedor: "",
    product_stock: [],
    id: 0,
    estado: "",
    actualizado_por: "",
    fecha: ""
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
  deleteOrderProduct: (productId: number) => {
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
      product_stock: [...order.product_stock, product],
    });

  const updateOrderProduct = (updateProduct: IProductStock) => {
    const product_stock = order.product_stock.map((product: IProductStock) => {
      if (product.id === updateProduct.id) {
        return updateProduct;
      }
      return product;
    });

    setOrder({ ...order, product_stock });
  };

  const deleteOrderProduct = (id: number) =>
    setOrder({
      ...order,
      product_stock: order.product_stock.filter(
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

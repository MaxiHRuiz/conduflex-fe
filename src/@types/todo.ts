import { IOrder } from "dtos/order.dto";
import { IProduct } from "dtos/product.dto";
import { IStock } from "dtos/stock.dto";

export interface ITodo {
    id: number;
    title: string;
    description: string;
    status: boolean;
  }
  export type TodoContextType = {
    todos: ITodo[];
    tableChecked: boolean
    products: Array<IProduct>
    stocks: Array<IStock>
    orders: Array<IOrder>
    saveProduct: (product: IProduct) => void;
    updateProduct: (codigo: string, product: IProduct) => void;
    deleteProduct: (codigo: string) => void;
    saveStock: (product: IStock) => void;
    updateStock: (id: string, product: IStock) => void;
    deleteStock: (id: string) => void;
    saveOrder: (order: IOrder) => void;
    updateOrder: (id: string, order: IOrder) => void;
    deleteOrder: (id: string) => void;
    setTableChecked: (value: boolean) => void;
    saveTodo: (todo: ITodo) => void;
    updateTodo: (id: number) => void;
  };
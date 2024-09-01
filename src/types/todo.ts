import { IOrder as OldOrder } from "dtos/order.dto";
import { IComprador, IOrder, IProductStock } from "./order";


  export type TodoContextType = {
    tableChecked: boolean
    // products: Array<IProduct>
    // stocks: Array<IStock>
    order: IOrder
    // orders: Array<OldOrder>
    // saveProduct: (product: IProduct) => void;
    // updateProduct: (codigo: string, product: IProduct) => void;
    // deleteProduct: (codigo: string) => void;
    // saveStock: (product: IStock) => void;
    // updateStock: (id: string, product: IStock) => void;
    // deleteStock: (id: string) => void;
    saveNewOrder: (order: IOrder) => void;
    saveOrderProduct: (product: IProductStock) => void;
    deleteOrderProduct: (productId: string) => void;
    deleteOrder: () => void;
    updateOrderProduct: (updateProduct: IProductStock) => void;
    updateOrderComprador: (comprador: IComprador) => void;
    // saveOrder: (order: IOrder) => void;
    // updateOrder: (id: string, order: IOrder) => void;
    // deleteOrder: (id: string) => void;s
    setTableChecked: (value: boolean) => void;
  };
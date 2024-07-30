import React, { useContext, useEffect } from "react";
import { TodoContextType, ITodo } from "../@types/todo";
import { IProduct } from "dtos/product.dto";
import { IStock } from "dtos/stock.dto";
import { IOrder } from "dtos/order.dto";

const products: Array<IProduct> = 
[
    {
        codigo: "103",
        stock: false,
        descripcion: "UNIPOLAR 1 X 0,50",
        espesor_aislacion_promedio: 0.6,
        espesor_aislacion_minimo: 0.44,
        espesor_envoltura_promedio: 0,
        espesor_envoltura_minimo: 0,
        diametro_nominal: 0,
        diametro_maximo_extremo: 0,
        resist_aislacion_70c: 0.011,
        tension_electrodos: "4 Kv.",
        resist_electrica_20c: 0,
        tension_en_agua: 0,
        cantidad_hilos: 7,
        diametros_hilos: 0.3,
        diametro_cuerda: 0.91,
        pico_cuerda: 0,
        diametro_conductor_calculado: 2.11,
        diametro_conductor_Produccion: 2.1,
        matriz: "2.15",
        cantidad_almas: 1,
        diametro_cableado: 2.1,
        pico_relleno: 0,
        diametro_relleno_calculado: 0,
        diametro_relleno_produccion: 0,
        espesor: 0,
        diametro_sobre_fleje: 0,
        diametro_envoltura_calculado: 0,
        diametro_envoltura_produccion: 0,
        matriz_envoltura: 0,
        kgs_a: 0.44,
        kgs_r: 0,
        kgs_v: 0,
        kgs_cu: 0.455,
        kgs_totales: 0.895,
        kgs_terminado: 0.868,
        kgs_produccion: 0,
        kgs_armadura_metalica: 0,
        paso: "",
        matriz_relleno: "",
        pico: "",
        obs1: "",
        obs2: "",
        obs3: "",
        paso_final: "",
        precio: 0
    },
    {
        codigo: "104",
        stock: false,
        descripcion: "UNIPOLAR 1 X 0,75",
        espesor_aislacion_promedio: 0.6,
        espesor_aislacion_minimo: 0.44,
        espesor_envoltura_promedio: 0,
        espesor_envoltura_minimo: 0,
        diametro_nominal: 0,
        diametro_maximo_extremo: 2.8,
        resist_aislacion_70c: 0.011,
        tension_electrodos: "4 Kv.",
        resist_electrica_20c: 26,
        tension_en_agua: 0,
        cantidad_hilos: 10,
        diametros_hilos: 0.3,
        diametro_cuerda: 1.09,
        pico_cuerda: 0,
        diametro_conductor_calculado: 2.29,
        diametro_conductor_Produccion: 2.3,
        matriz: "2.40",
        cantidad_almas: 1,
        diametro_cableado: 2.3,
        pico_relleno: 0,
        diametro_relleno_calculado: 0,
        diametro_relleno_produccion: 0,
        espesor: 0,
        diametro_sobre_fleje: 0,
        diametro_envoltura_calculado: 0,
        diametro_envoltura_produccion: 0,
        matriz_envoltura: 0,
        kgs_a: 0.5,
        kgs_r: 0,
        kgs_v: 0,
        kgs_cu: 0.65,
        kgs_totales: 1.15,
        kgs_terminado: 1.116,
        kgs_produccion: 0,
        kgs_armadura_metalica: 0,
        paso: "",
        matriz_relleno: "",
        pico: "",
        obs1: "Distancia pico a matriz    mm.",
        obs2: "",
        obs3: "",
        paso_final: "",
        precio: 0
    },
    {
        codigo: "105V",
        stock: false,
        descripcion: "UNIPOLAR 1 X 1",
        espesor_aislacion_promedio: 0.6,
        espesor_aislacion_minimo: 0.53,
        espesor_envoltura_promedio: 0,
        espesor_envoltura_minimo: 0,
        diametro_nominal: 0,
        diametro_maximo_extremo: 3.2,
        resist_aislacion_70c: 0.01,
        tension_electrodos: "5 Kv.",
        resist_electrica_20c: 19.5,
        tension_en_agua: 0,
        cantidad_hilos: 13,
        diametros_hilos: 0.3,
        diametro_cuerda: 1.24,
        pico_cuerda: 0,
        diametro_conductor_calculado: 2.44,
        diametro_conductor_Produccion: 2.45,
        matriz: "2.60",
        cantidad_almas: 1,
        diametro_cableado: 2.45,
        pico_relleno: 0,
        diametro_relleno_calculado: 0,
        diametro_relleno_produccion: 0,
        espesor: 0,
        diametro_sobre_fleje: 0,
        diametro_envoltura_calculado: 0,
        diametro_envoltura_produccion: 0,
        matriz_envoltura: 0,
        kgs_a: 0.54,
        kgs_r: 0,
        kgs_v: 0,
        kgs_cu: 0.845,
        kgs_totales: 1.385,
        kgs_terminado: 1.344,
        kgs_produccion: 0,
        kgs_armadura_metalica: 0,
        paso: "50",
        matriz_relleno: "",
        pico: "",
        obs1: "Distancia pico a matriz    mm.",
        obs2: "",
        obs3: "",
        paso_final: "50",
        precio: 0
    },
    {
        codigo: "105R",
        stock: false,
        descripcion: "UNIPOLAR 1 X 1",
        espesor_aislacion_promedio: 0.6,
        espesor_aislacion_minimo: 0.53,
        espesor_envoltura_promedio: 0,
        espesor_envoltura_minimo: 0,
        diametro_nominal: 0,
        diametro_maximo_extremo: 3.2,
        resist_aislacion_70c: 0.01,
        tension_electrodos: "5 Kv.",
        resist_electrica_20c: 19.5,
        tension_en_agua: 0,
        cantidad_hilos: 13,
        diametros_hilos: 0.3,
        diametro_cuerda: 1.24,
        pico_cuerda: 0,
        diametro_conductor_calculado: 2.44,
        diametro_conductor_Produccion: 2.45,
        matriz: "2.60",
        cantidad_almas: 1,
        diametro_cableado: 2.45,
        pico_relleno: 0,
        diametro_relleno_calculado: 0,
        diametro_relleno_produccion: 0,
        espesor: 0,
        diametro_sobre_fleje: 0,
        diametro_envoltura_calculado: 0,
        diametro_envoltura_produccion: 0,
        matriz_envoltura: 0,
        kgs_a: 0.54,
        kgs_r: 0,
        kgs_v: 0,
        kgs_cu: 0.845,
        kgs_totales: 1.385,
        kgs_terminado: 1.344,
        kgs_produccion: 0,
        kgs_armadura_metalica: 0,
        paso: "50",
        matriz_relleno: "",
        pico: "",
        obs1: "Distancia pico a matriz    mm.",
        obs2: "",
        obs3: "",
        paso_final: "50",
        precio: 0
    },
    {
        codigo: "105M",
        stock: false,
        descripcion: "UNIPOLAR 1 X 1",
        espesor_aislacion_promedio: 0.6,
        espesor_aislacion_minimo: 0.53,
        espesor_envoltura_promedio: 0,
        espesor_envoltura_minimo: 0,
        diametro_nominal: 0,
        diametro_maximo_extremo: 3.2,
        resist_aislacion_70c: 0.01,
        tension_electrodos: "5 Kv.",
        resist_electrica_20c: 19.5,
        tension_en_agua: 0,
        cantidad_hilos: 13,
        diametros_hilos: 0.3,
        diametro_cuerda: 1.24,
        pico_cuerda: 0,
        diametro_conductor_calculado: 2.44,
        diametro_conductor_Produccion: 2.45,
        matriz: "2.60",
        cantidad_almas: 1,
        diametro_cableado: 2.45,
        pico_relleno: 0,
        diametro_relleno_calculado: 0,
        diametro_relleno_produccion: 0,
        espesor: 0,
        diametro_sobre_fleje: 0,
        diametro_envoltura_calculado: 0,
        diametro_envoltura_produccion: 0,
        matriz_envoltura: 0,
        kgs_a: 0.54,
        kgs_r: 0,
        kgs_v: 0,
        kgs_cu: 0.845,
        kgs_totales: 1.385,
        kgs_terminado: 1.344,
        kgs_produccion: 0,
        kgs_armadura_metalica: 0,
        paso: "50",
        matriz_relleno: "",
        pico: "",
        obs1: "Distancia pico a matriz    mm.",
        obs2: "",
        obs3: "",
        paso_final: "50",
        precio: 0
    },
    {
        codigo: "105C",
        stock: false,
        descripcion: "UNIPOLAR 1 X 1",
        espesor_aislacion_promedio: 0.6,
        espesor_aislacion_minimo: 0.53,
        espesor_envoltura_promedio: 0,
        espesor_envoltura_minimo: 0,
        diametro_nominal: 0,
        diametro_maximo_extremo: 3.2,
        resist_aislacion_70c: 0.01,
        tension_electrodos: "5 Kv.",
        resist_electrica_20c: 19.5,
        tension_en_agua: 0,
        cantidad_hilos: 13,
        diametros_hilos: 0.3,
        diametro_cuerda: 1.24,
        pico_cuerda: 0,
        diametro_conductor_calculado: 2.44,
        diametro_conductor_Produccion: 2.45,
        matriz: "2.60",
        cantidad_almas: 1,
        diametro_cableado: 2.45,
        pico_relleno: 0,
        diametro_relleno_calculado: 0,
        diametro_relleno_produccion: 0,
        espesor: 0,
        diametro_sobre_fleje: 0,
        diametro_envoltura_calculado: 0,
        diametro_envoltura_produccion: 0,
        matriz_envoltura: 0,
        kgs_a: 0.54,
        kgs_r: 0,
        kgs_v: 0,
        kgs_cu: 0.845,
        kgs_totales: 1.385,
        kgs_terminado: 1.344,
        kgs_produccion: 0,
        kgs_armadura_metalica: 0,
        paso: "50",
        matriz_relleno: "",
        pico: "",
        obs1: "Distancia pico a matriz    mm.",
        obs2: "",
        obs3: "",
        paso_final: "50",
        precio: 0
    },
    {
        codigo: "105B",
        stock: false,
        descripcion: "UNIPOLAR 1 X 1",
        espesor_aislacion_promedio: 0.6,
        espesor_aislacion_minimo: 0.53,
        espesor_envoltura_promedio: 0,
        espesor_envoltura_minimo: 0,
        diametro_nominal: 0,
        diametro_maximo_extremo: 3.2,
        resist_aislacion_70c: 0.01,
        tension_electrodos: "5 Kv.",
        resist_electrica_20c: 19.5,
        tension_en_agua: 0,
        cantidad_hilos: 13,
        diametros_hilos: 0.3,
        diametro_cuerda: 1.24,
        pico_cuerda: 0,
        diametro_conductor_calculado: 2.44,
        diametro_conductor_Produccion: 2.45,
        matriz: "2.60",
        cantidad_almas: 1,
        diametro_cableado: 2.45,
        pico_relleno: 0,
        diametro_relleno_calculado: 0,
        diametro_relleno_produccion: 0,
        espesor: 0,
        diametro_sobre_fleje: 0,
        diametro_envoltura_calculado: 0,
        diametro_envoltura_produccion: 0,
        matriz_envoltura: 0,
        kgs_a: 0.54,
        kgs_r: 0,
        kgs_v: 0,
        kgs_cu: 0.845,
        kgs_totales: 1.385,
        kgs_terminado: 1.344,
        kgs_produccion: 0,
        kgs_armadura_metalica: 0,
        paso: "50",
        matriz_relleno: "",
        pico: "",
        obs1: "Distancia pico a matriz    mm.",
        obs2: "",
        obs3: "",
        paso_final: "50",
        precio: 0
    },
    {
        codigo: "105N",
        stock: false,
        descripcion: "UNIPOLAR 1 X 1",
        espesor_aislacion_promedio: 0.6,
        espesor_aislacion_minimo: 0.53,
        espesor_envoltura_promedio: 0,
        espesor_envoltura_minimo: 0,
        diametro_nominal: 0,
        diametro_maximo_extremo: 3.2,
        resist_aislacion_70c: 0.01,
        tension_electrodos: "5 Kv.",
        resist_electrica_20c: 19.5,
        tension_en_agua: 0,
        cantidad_hilos: 13,
        diametros_hilos: 0.3,
        diametro_cuerda: 1.24,
        pico_cuerda: 0,
        diametro_conductor_calculado: 2.44,
        diametro_conductor_Produccion: 2.45,
        matriz: "2.60",
        cantidad_almas: 1,
        diametro_cableado: 2.45,
        pico_relleno: 0,
        diametro_relleno_calculado: 0,
        diametro_relleno_produccion: 0,
        espesor: 0,
        diametro_sobre_fleje: 0,
        diametro_envoltura_calculado: 0,
        diametro_envoltura_produccion: 0,
        matriz_envoltura: 0,
        kgs_a: 0.54,
        kgs_r: 0,
        kgs_v: 0,
        kgs_cu: 0.845,
        kgs_totales: 1.385,
        kgs_terminado: 1.344,
        kgs_produccion: 0,
        kgs_armadura_metalica: 0,
        paso: "50",
        matriz_relleno: "",
        pico: "",
        obs1: "Distancia pico a matriz    mm.",
        obs2: "",
        obs3: "",
        paso_final: "50",
        precio: 0
    },
    {
        codigo: "105VB",
        stock: false,
        descripcion: "UNIPOLAR 1 X 1",
        espesor_aislacion_promedio: 0.6,
        espesor_aislacion_minimo: 0.53,
        espesor_envoltura_promedio: 0,
        espesor_envoltura_minimo: 0,
        diametro_nominal: 0,
        diametro_maximo_extremo: 3.2,
        resist_aislacion_70c: 0.01,
        tension_electrodos: "5 Kv.",
        resist_electrica_20c: 19.5,
        tension_en_agua: 0,
        cantidad_hilos: 13,
        diametros_hilos: 0.3,
        diametro_cuerda: 1.24,
        pico_cuerda: 0,
        diametro_conductor_calculado: 2.44,
        diametro_conductor_Produccion: 2.45,
        matriz: "2.60",
        cantidad_almas: 1,
        diametro_cableado: 2.45,
        pico_relleno: 0,
        diametro_relleno_calculado: 0,
        diametro_relleno_produccion: 0,
        espesor: 0,
        diametro_sobre_fleje: 0,
        diametro_envoltura_calculado: 0,
        diametro_envoltura_produccion: 0,
        matriz_envoltura: 0,
        kgs_a: 0.54,
        kgs_r: 0,
        kgs_v: 0,
        kgs_cu: 0.845,
        kgs_totales: 1.385,
        kgs_terminado: 1.344,
        kgs_produccion: 0,
        kgs_armadura_metalica: 0,
        paso: "50",
        matriz_relleno: "",
        pico: "",
        obs1: "Distancia pico a matriz    mm.",
        obs2: "",
        obs3: "",
        paso_final: "50",
        precio: 0
    },
    {
        codigo: "105RB",
        stock: false,
        descripcion: "UNIPOLAR 1 X 1",
        espesor_aislacion_promedio: 0.6,
        espesor_aislacion_minimo: 0.53,
        espesor_envoltura_promedio: 0,
        espesor_envoltura_minimo: 0,
        diametro_nominal: 0,
        diametro_maximo_extremo: 3.2,
        resist_aislacion_70c: 0.01,
        tension_electrodos: "5 Kv.",
        resist_electrica_20c: 19.5,
        tension_en_agua: 0,
        cantidad_hilos: 13,
        diametros_hilos: 0.3,
        diametro_cuerda: 1.24,
        pico_cuerda: 0,
        diametro_conductor_calculado: 2.44,
        diametro_conductor_Produccion: 2.45,
        matriz: "2.60",
        cantidad_almas: 1,
        diametro_cableado: 2.45,
        pico_relleno: 0,
        diametro_relleno_calculado: 0,
        diametro_relleno_produccion: 0,
        espesor: 0,
        diametro_sobre_fleje: 0,
        diametro_envoltura_calculado: 0,
        diametro_envoltura_produccion: 0,
        matriz_envoltura: 0,
        kgs_a: 0.54,
        kgs_r: 0,
        kgs_v: 0,
        kgs_cu: 0.845,
        kgs_totales: 1.385,
        kgs_terminado: 1.344,
        kgs_produccion: 0,
        kgs_armadura_metalica: 0,
        paso: "50",
        matriz_relleno: "",
        pico: "",
        obs1: "Distancia pico a matriz    mm.",
        obs2: "",
        obs3: "",
        paso_final: "50",
        precio: 0
    }
]


const stock: IStock = {
  id: "20240729001",
  codigo: "104",
  descripcion: "UNIPOLAR 1 X 0,75",
  cantidad_metros: 6,
  cantidad_metros_vendidos: 2,
  detalle: "primer stock creado",
};

const order: IOrder ={
  id: "0001",
  list: [
    {
      id_stock: "2024070300",
      id_producto: "AAA1",
      descripcion_producto: "cable verde 2mm",
      contindad_producto: 50,
      subStatus: "despachado"
    }
  ],
  status: "aprobado",
  vendedor: "almeida@gmail.com"
}



const defaultValues: TodoContextType = {
  todos: [],
  saveTodo: function (todo: ITodo): void {
    throw new Error("Function not implemented.");
  },
  updateTodo: function (id: number): void {
    throw new Error("Function not implemented.");
  },
  tableChecked: false,
  setTableChecked: function (value: boolean): void {
    throw new Error("Function not implemented.");
  },
  products: [],
  saveProduct: function (product: IProduct): void {
    throw new Error("Function not implemented.");
  },
  updateProduct: function (codigo: string, product: IProduct): void {
    throw new Error("Function not implemented.");
  },
  deleteProduct: function (codigo: string): void {
    throw new Error("Function not implemented.");
  },
  stocks: [],
  saveStock: function (stock: IStock): void {
    throw new Error("Function not implemented.");
  },
  updateStock: function (id: string, stock: IStock): void {
    throw new Error("Function not implemented.");
  },
  deleteStock: function (id: string): void {
    throw new Error("Function not implemented.");
  },
  orders: [],
  saveOrder: function (order: IOrder): void {
    throw new Error("Function not implemented.");
  },
  updateOrder: function (id: string, order: IOrder): void {
    throw new Error("Function not implemented.");
  },
  deleteOrder: function (id: string): void {
    throw new Error("Function not implemented.");
  }
};

export const TodoContext = React.createContext<TodoContextType>(defaultValues);

function getInitialState() {
  const productsLS = localStorage.getItem("products");
  return productsLS ? JSON.parse(productsLS) : products;
}
function getInitialStateStock() {
  const stocksLS = localStorage.getItem("stocks");
  return stocksLS ? JSON.parse(stocksLS) : [stock];
}

function getInitialStateOrder() {
  const ordersLS = localStorage.getItem("orders");
  return ordersLS ? JSON.parse(ordersLS) : [order];
}

const TodoProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [todos, setTodos] = React.useState<ITodo[]>([
    {
      id: 1,
      title: "post 1",
      description: "this is a description",
      status: false,
    },
    {
      id: 2,
      title: "post 2",
      description: "this is a description",
      status: true,
    },
  ]);
  const [tableChecked, setTableChecked] = React.useState<boolean>(false);
  const [products, setProducts] =
    React.useState<Array<IProduct>>(getInitialState);
  const [stocks, setStocks] =
    React.useState<Array<IStock>>(getInitialStateStock);
    const [orders, setOrders] =
    React.useState<Array<IOrder>>(getInitialStateOrder);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem("stocks", JSON.stringify(stocks));
  }, [stocks]);

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  const saveTodo = (todo: ITodo) => {
    const newTodo: ITodo = {
      id: Math.random(), // not really unique - but fine for this example
      title: todo.title,
      description: todo.description,
      status: false,
    };
    setTodos([...todos, newTodo]);
  };
  const updateTodo = (id: number) => {
    todos.filter((todo: ITodo) => {
      if (todo.id === id) {
        todo.status = true;
        setTodos([...todos]);
      }
    });
  };

  const saveProduct = (newProduct: IProduct) => {
    // const newProduct: IProduct = {
    //   id: Math.random(), // not really unique - but fine for this example
    //   title: product.title,
    //   description: product.description,
    //   status: false,
    // };
    setProducts([...products, newProduct]);
  };
  const updateProduct = (codigo: string, newProduct: IProduct) => {
    const newProducts = products.map((product: IProduct) => {
      if (product.codigo === codigo) {
        return newProduct;
      }
      return product;
    });

    setProducts([...newProducts]);
  };
  const deleteProduct = (codigo: string) => {
    setProducts(
      products.filter((product: IProduct) => product.codigo !== codigo)
    );
  };

  const saveStock = (newStock: IStock) => {
    // const newProduct: IProduct = {
    //   id: Math.random(), // not really unique - but fine for this example
    //   title: product.title,
    //   description: product.description,
    //   status: false,
    // };
    setStocks([...stocks, newStock]);
  };
  const updateStock = (id: string, newStock: IStock) => {
    const newStocks = stocks.map((stock: IStock) => {
      if (stock.id === id) {
        return newStock;
      }
      return stock;
    });

    setStocks([...newStocks]);
  };
  const deleteStock = (id: string) => {
    setStocks(stocks.filter((stock: IStock) => stock.id !== id));
  };


  const saveOrder = (newOrder: IOrder) => {
    // const newProduct: IProduct = {
    //   id: Math.random(), // not really unique - but fine for this example
    //   title: product.title,
    //   description: product.description,
    //   status: false,
    // };
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
        todos,
        tableChecked,
        products,
        stocks,
        orders,
        saveProduct,
        updateProduct,
        deleteProduct,
        saveOrder,
        updateOrder,
        deleteOrder,
        setTableChecked,
        saveTodo,
        updateTodo,
        saveStock,
        updateStock,
        deleteStock,
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

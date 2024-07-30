import React, { useContext, useEffect } from "react";
import { TodoContextType } from "../@types/todo";
import { IProduct } from "dtos/product.dto";
import { IStock } from "dtos/stock.dto";
import { IOrder } from "dtos/order.dto";

const products: Array<IProduct> = [
  {
    id: "1",
    codigo: "103",
    stock: true,
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
    precio: 20000,
  },
  {
    codigo: "104",
    stock: true,
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
    precio: 30000.5,
    id: "",
  },
  {
    codigo: "105V",
    stock: true,
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
    precio: 12000,
    id: "",
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
    precio: 4000,
    id: "",
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
    precio: 10800,
    id: "",
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
    precio: 30600,
    id: "",
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
    precio: 12133.32,
    id: "",
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
    precio: 12300,
    id: "",
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
    precio: 124234,
    id: "",
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
    precio: 3000,
    id: "",
  },
];

const stocks: Array<IStock> = [
  {
    id: "20240729001",
    codigo: "104",
    descripcion: "UNIPOLAR 1 X 0,75",
    cantidad_metros: 6,
    cantidad_metros_vendidos: 2,
    detalle: "Detalle de stock",
  },
  {
    id: "20240729002",
    codigo: "104",
    descripcion: "UNIPOLAR 1 X 0,75",
    cantidad_metros: 6,
    cantidad_metros_vendidos: 2,
    detalle: "Detalle de stock",
  },
  {
    id: "20240729003",
    codigo: "104",
    descripcion: "UNIPOLAR 1 X 0,75",
    cantidad_metros: 6,
    cantidad_metros_vendidos: 2,
    detalle: "Detalle de stock",
  },
  {
    id: "20240728001",
    codigo: "103",
    descripcion: "Unipolar 1 x 0,50",
    cantidad_metros: 6,
    cantidad_metros_vendidos: 2,
    detalle: "Detalle de stock",
  },
  {
    id: "20240728002",
    codigo: "103",
    descripcion: "Unipolar 1 x 0,50",
    cantidad_metros: 6,
    cantidad_metros_vendidos: 2,
    detalle: "Detalle de stock",
  },
  {
    id: "20240728003",
    codigo: "103",
    descripcion: "Unipolar 1 x 0,50",
    cantidad_metros: 6,
    cantidad_metros_vendidos: 2,
    detalle: "Detalle de stock",
  },
  {
    id: "20240720001",
    codigo: "105V",
    descripcion: "Unipolar 1 x 1",
    cantidad_metros: 6,
    cantidad_metros_vendidos: 2,
    detalle: "Detalle de stock",
  },
  {
    id: "20240720001",
    codigo: "105V",
    descripcion: "Unipolar 1 x 1",
    cantidad_metros: 6,
    cantidad_metros_vendidos: 2,
    detalle: "Detalle de stock",
  },
];

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
  },
};

export const TodoContext = React.createContext<TodoContextType>(defaultValues);

function getInitialState() {
  const productsLS = localStorage.getItem("products");
  return productsLS ? JSON.parse(productsLS) : products;
}
function getInitialStateStock() {
  const stocksLS = localStorage.getItem("stocks");
  return stocksLS ? JSON.parse(stocksLS) : stocks;
}

function getInitialStateOrder() {
  const ordersLS = localStorage.getItem("orders");
  return ordersLS ? JSON.parse(ordersLS) : orders;
}

const TodoProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
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

  const saveProduct = (newProduct: IProduct) => {
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

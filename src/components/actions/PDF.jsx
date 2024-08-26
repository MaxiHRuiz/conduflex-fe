import { Button } from "@mui/material";
import jsPDF from "jspdf";
import * as autoTable from 'jspdf-autotable';
import logo from "../../assets/images/logo-conduflex-logo.png";


const PDF = ({order}) => {
  const generarPDF = () => {
    const doc = new jsPDF('p', 'mm', 'a4');

        const img = new Image();
        img.src = logo;        
        img.onload = () => {
            // Agregar imagen como encabezado
            doc.addImage(img, 'JPEG', 150, 10, 50, 20);
        }

    // Agregar encabezado
    doc.text('Reporte de Stock de Productos', 10, 10);
    doc.text(`Fecha: ${new Date(order.fecha).toLocaleDateString()}`, 10, 20);
    doc.text(`Vendedor: ${order.vendedor}`, 10, 30);



    // Agregar la tabla
    doc.autoTable({
        startY: 40,
        head: [['ID Producto', 'Descripción', 'Estado', 'Cantidad', 'Precio x metro']],
        body: [{ id: "", product_id: "105M", descripcion: "UNIPOLAR 1 X 1", estado: "no_disponible", cantidad_metros: 10, precio: 100 },
          { id: "", product_id: "106M", descripcion: "UNIPOLAR 2 X 1", estado: "disponible", cantidad_metros: 20, precio: 200 },
          { id: "", product_id: "107M", descripcion: "UNIPOLAR 3 X 1", estado: "disponible", cantidad_metros: 30, precio: 300 },
          { id: "", product_id: "108M", descripcion: "UNIPOLAR 4 X 1", estado: "disponible", cantidad_metros: 40, precio: 400 },
          { id: "", product_id: "109M", descripcion: "UNIPOLAR 5 X 1", estado: "disponible", cantidad_metros: 50, precio: 500 },
          { id: "", product_id: "110M", descripcion: "UNIPOLAR 6 X 1", estado: "disponible", cantidad_metros: 60, precio: 600 },
          { id: "", product_id: "111M", descripcion: "UNIPOLAR 7 X 1", estado: "disponible", cantidad_metros: 70, precio: 700 },
          { id: "", product_id: "112M", descripcion: "UNIPOLAR 8 X 1", estado: "disponible", cantidad_metros: 80, precio: 800 },
          { id: "", product_id: "113M", descripcion: "UNIPOLAR 9 X 1", estado: "disponible", cantidad_metros: 90, precio: 900 },
          { id: "", product_id: "114M", descripcion: "UNIPOLAR 10 X 1", estado: "disponible", cantidad_metros: 100, precio: 1000 },{ id: "", product_id: "105M", descripcion: "UNIPOLAR 1 X 1", estado: "no_disponible", cantidad_metros: 10, precio: 100 },
          { id: "", product_id: "106M", descripcion: "UNIPOLAR 2 X 1", estado: "disponible", cantidad_metros: 20, precio: 200 },
          { id: "", product_id: "107M", descripcion: "UNIPOLAR 3 X 1", estado: "disponible", cantidad_metros: 30, precio: 300 },
          { id: "", product_id: "108M", descripcion: "UNIPOLAR 4 X 1", estado: "disponible", cantidad_metros: 40, precio: 400 },
          { id: "", product_id: "109M", descripcion: "UNIPOLAR 5 X 1", estado: "disponible", cantidad_metros: 50, precio: 500 },
          { id: "", product_id: "110M", descripcion: "UNIPOLAR 6 X 1", estado: "disponible", cantidad_metros: 60, precio: 600 },
          { id: "", product_id: "111M", descripcion: "UNIPOLAR 7 X 1", estado: "disponible", cantidad_metros: 70, precio: 700 },
          { id: "", product_id: "112M", descripcion: "UNIPOLAR 8 X 1", estado: "disponible", cantidad_metros: 80, precio: 800 },
          { id: "", product_id: "113M", descripcion: "UNIPOLAR 9 X 1", estado: "disponible", cantidad_metros: 90, precio: 900 },
          { id: "", product_id: "114M", descripcion: "UNIPOLAR 10 X 1", estado: "disponible", cantidad_metros: 100, precio: 1000 },{ id: "", product_id: "105M", descripcion: "UNIPOLAR 1 X 1", estado: "no_disponible", cantidad_metros: 10, precio: 100 },
          { id: "", product_id: "106M", descripcion: "UNIPOLAR 2 X 1", estado: "disponible", cantidad_metros: 20, precio: 200 },
          { id: "", product_id: "107M", descripcion: "UNIPOLAR 3 X 1", estado: "disponible", cantidad_metros: 30, precio: 300 },
          { id: "", product_id: "108M", descripcion: "UNIPOLAR 4 X 1", estado: "disponible", cantidad_metros: 40, precio: 400 },
          { id: "", product_id: "109M", descripcion: "UNIPOLAR 5 X 1", estado: "disponible", cantidad_metros: 50, precio: 500 },
          { id: "", product_id: "110M", descripcion: "UNIPOLAR 6 X 1", estado: "disponible", cantidad_metros: 60, precio: 600 },
          { id: "", product_id: "111M", descripcion: "UNIPOLAR 7 X 1", estado: "disponible", cantidad_metros: 70, precio: 700 },
          { id: "", product_id: "112M", descripcion: "UNIPOLAR 8 X 1", estado: "disponible", cantidad_metros: 80, precio: 800 },
          { id: "", product_id: "113M", descripcion: "UNIPOLAR 9 X 1", estado: "disponible", cantidad_metros: 90, precio: 900 },
          { id: "", product_id: "114M", descripcion: "UNIPOLAR 10 X 1", estado: "disponible", cantidad_metros: 100, precio: 1000 },{ id: "", product_id: "105M", descripcion: "UNIPOLAR 1 X 1", estado: "no_disponible", cantidad_metros: 10, precio: 100 },
          { id: "", product_id: "106M", descripcion: "UNIPOLAR 2 X 1", estado: "disponible", cantidad_metros: 20, precio: 200 },
          { id: "", product_id: "107M", descripcion: "UNIPOLAR 3 X 1", estado: "disponible", cantidad_metros: 30, precio: 300 },
          { id: "", product_id: "108M", descripcion: "UNIPOLAR 4 X 1", estado: "disponible", cantidad_metros: 40, precio: 400 },
          { id: "", product_id: "109M", descripcion: "UNIPOLAR 5 X 1", estado: "disponible", cantidad_metros: 50, precio: 500 },
          { id: "", product_id: "110M", descripcion: "UNIPOLAR 6 X 1", estado: "disponible", cantidad_metros: 60, precio: 600 },
          { id: "", product_id: "111M", descripcion: "UNIPOLAR 7 X 1", estado: "disponible", cantidad_metros: 70, precio: 700 },
          { id: "", product_id: "112M", descripcion: "UNIPOLAR 8 X 1", estado: "disponible", cantidad_metros: 80, precio: 800 },
          { id: "", product_id: "113M", descripcion: "UNIPOLAR 9 X 1", estado: "disponible", cantidad_metros: 90, precio: 900 },
          { id: "", product_id: "114M", descripcion: "UNIPOLAR 10 X 1", estado: "disponible", cantidad_metros: 100, precio: 1000 },{ id: "", product_id: "105M", descripcion: "UNIPOLAR 1 X 1", estado: "no_disponible", cantidad_metros: 10, precio: 100 },
          { id: "", product_id: "106M", descripcion: "UNIPOLAR 2 X 1", estado: "disponible", cantidad_metros: 20, precio: 200 },
          { id: "", product_id: "107M", descripcion: "UNIPOLAR 3 X 1", estado: "disponible", cantidad_metros: 30, precio: 300 },
          { id: "", product_id: "108M", descripcion: "UNIPOLAR 4 X 1", estado: "disponible", cantidad_metros: 40, precio: 400 },
          { id: "", product_id: "109M", descripcion: "UNIPOLAR 5 X 1", estado: "disponible", cantidad_metros: 50, precio: 500 },
          { id: "", product_id: "110M", descripcion: "UNIPOLAR 6 X 1", estado: "disponible", cantidad_metros: 60, precio: 600 },
          { id: "", product_id: "111M", descripcion: "UNIPOLAR 7 X 1", estado: "disponible", cantidad_metros: 70, precio: 700 },
          { id: "", product_id: "112M", descripcion: "UNIPOLAR 8 X 1", estado: "disponible", cantidad_metros: 80, precio: 800 },
          { id: "", product_id: "113M", descripcion: "UNIPOLAR 9 X 1", estado: "disponible", cantidad_metros: 90, precio: 900 },
          { id: "", product_id: "114M", descripcion: "UNIPOLAR 10 X 1", estado: "disponible", cantidad_metros: 100, precio: 1000 },{ id: "", product_id: "105M", descripcion: "UNIPOLAR 1 X 1", estado: "no_disponible", cantidad_metros: 10, precio: 100 },
          { id: "", product_id: "106M", descripcion: "UNIPOLAR 2 X 1", estado: "disponible", cantidad_metros: 20, precio: 200 },
          { id: "", product_id: "107M", descripcion: "UNIPOLAR 3 X 1", estado: "disponible", cantidad_metros: 30, precio: 300 },
          { id: "", product_id: "108M", descripcion: "UNIPOLAR 4 X 1", estado: "disponible", cantidad_metros: 40, precio: 400 },
          { id: "", product_id: "109M", descripcion: "UNIPOLAR 5 X 1", estado: "disponible", cantidad_metros: 50, precio: 500 },
          { id: "", product_id: "110M", descripcion: "UNIPOLAR 6 X 1", estado: "disponible", cantidad_metros: 60, precio: 600 },
          { id: "", product_id: "111M", descripcion: "UNIPOLAR 7 X 1", estado: "disponible", cantidad_metros: 70, precio: 700 },
          { id: "", product_id: "112M", descripcion: "UNIPOLAR 8 X 1", estado: "disponible", cantidad_metros: 80, precio: 800 },
          { id: "", product_id: "113M", descripcion: "UNIPOLAR 9 X 1", estado: "disponible", cantidad_metros: 90, precio: 900 },
          { id: "", product_id: "114M", descripcion: "UNIPOLAR 10 X 1", estado: "disponible", cantidad_metros: 100, precio: 1000 },{ id: "", product_id: "105M", descripcion: "UNIPOLAR 1 X 1", estado: "no_disponible", cantidad_metros: 10, precio: 100 },
          { id: "", product_id: "106M", descripcion: "UNIPOLAR 2 X 1", estado: "disponible", cantidad_metros: 20, precio: 200 },
          { id: "", product_id: "107M", descripcion: "UNIPOLAR 3 X 1", estado: "disponible", cantidad_metros: 30, precio: 300 },
          { id: "", product_id: "108M", descripcion: "UNIPOLAR 4 X 1", estado: "disponible", cantidad_metros: 40, precio: 400 },
          { id: "", product_id: "109M", descripcion: "UNIPOLAR 5 X 1", estado: "disponible", cantidad_metros: 50, precio: 500 },
          { id: "", product_id: "110M", descripcion: "UNIPOLAR 6 X 1", estado: "disponible", cantidad_metros: 60, precio: 600 },
          { id: "", product_id: "111M", descripcion: "UNIPOLAR 7 X 1", estado: "disponible", cantidad_metros: 70, precio: 700 },
          { id: "", product_id: "112M", descripcion: "UNIPOLAR 8 X 1", estado: "disponible", cantidad_metros: 80, precio: 800 },
          { id: "", product_id: "113M", descripcion: "UNIPOLAR 9 X 1", estado: "disponible", cantidad_metros: 90, precio: 900 },
          { id: "", product_id: "114M", descripcion: "UNIPOLAR 10 X 1", estado: "disponible", cantidad_metros: 100, precio: 1000 }].map((item) => [
            item.product_id,
            item.descripcion,
            item.estado,
            item.cantidad_metros?.toString(),
            item.precio?.toString(),
        ])
    });

    const fechaActual = new Date().toLocaleString();
    // const pageHeight = doc.internal.pageSize.height;
    // doc.text(`Fecha de emisión: ${fechaActual}`, 10, pageHeight - 10);

                // Agregar la fecha al final del PDF
                const pageCount = doc.internal.getNumberOfPages();

                for (let i = 1; i <= pageCount; i++) {
                    // Agregar texto "Conduflex" en la parte superior derecha con colores
                    doc.setFontSize(16)
                    doc.setTextColor(255, 191, 0); // Ámbar
                    doc.text('Condu', 170, 10);
                    doc.setTextColor(128, 128, 128); // Gris
                    doc.text('flex', 187, 10);
                    doc.setPage(i);
                    doc.setFontSize(10)
                    doc.text(`Fecha de emisión: ${fechaActual}`, 10, doc.internal.pageSize.height - 10);
                    doc.text(`Página ${i} de ${pageCount}`, doc.internal.pageSize.width - 50, doc.internal.pageSize.height - 10);
                }
    doc.save('reporte_stock.pdf');
};

  return <Button onClick={generarPDF}>Descargar</Button>;
};

export default PDF;

import { Button } from "@mui/material";
import jsPDF from "jspdf";
import * as autoTable from "jspdf-autotable";
import logo from "../../assets/images/logo-conduflex-logo.png";

const PDF = ({ order }) => {
  const generarPDF = () => {
    const doc = new jsPDF("p", "mm", "a4");

    const img = new Image();
    img.src = logo;
    img.onload = () => {
      // Agregar imagen como encabezado
      doc.addImage(img, "JPEG", 150, 10, 50, 20);
    };

    // Agregar encabezado
    doc.text("Reporte de Stock de Productos", 10, 10);
    doc.text(`Fecha: ${new Date(order.fecha).toLocaleDateString()}`, 10, 20);
    doc.text(`Vendedor: ${order.vendedor}`, 10, 30);

    // Agregar la tabla
    doc.autoTable({
      startY: 40,
      head: [
        ["ID Producto", "Descripción", "Estado", "Cantidad"],
      ],
      body: order.product_stock.map((item) => [
        item.product_id,
        item.descripcion,
        item.estado,
        item.cantidad_metros?.toString(),
      ]),
    });

    const fechaActual = new Date().toLocaleString();
    // const pageHeight = doc.internal.pageSize.height;
    // doc.text(`Fecha de emisión: ${fechaActual}`, 10, pageHeight - 10);

    // Agregar la fecha al final del PDF
    const pageCount = doc.internal.getNumberOfPages();

    for (let i = 1; i <= pageCount; i++) {
      // Agregar texto "Conduflex" en la parte superior derecha con colores
      doc.setFontSize(16);
      doc.setTextColor(255, 191, 0); // Ámbar
      doc.text("Condu", 170, 10);
      doc.setTextColor(128, 128, 128); // Gris
      doc.text("flex", 187, 10);
      doc.setPage(i);
      doc.setFontSize(10);
      doc.text(
        `Fecha de emisión: ${fechaActual}`,
        10,
        doc.internal.pageSize.height - 10
      );
      doc.text(
        `Página ${i} de ${pageCount}`,
        doc.internal.pageSize.width - 50,
        doc.internal.pageSize.height - 10
      );
    }
    doc.save("reporte_stock.pdf");
  };

  return <Button onClick={generarPDF}>Descargar</Button>;
};

export default PDF;

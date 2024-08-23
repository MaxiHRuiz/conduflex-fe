import React from "react";
import QRcode from "qrcode.react";
import { jsPDF } from "jspdf";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Tooltip,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import QrCodeIcon from "@mui/icons-material/QrCode";

interface IQRProps {
  stockId: string;
  value: string;
}

const QR = ({ stockId, value }: IQRProps) => {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const generatePDF = (fileName: string) => {
    // Defines the pdf
    let pdf = new jsPDF({
      orientation: "landscape",
      unit: "mm",
      format: [100, 100],
    });

    // Transforms the canvas into a base64 image
    let base64Image = (
      document?.getElementById("qrcode") as HTMLCanvasElement
    ).toDataURL();

    // Adds the image to the pdf
    pdf.addImage(base64Image, "png", 5, 5, 90, 90);

    // Downloads the pdf
    pdf.save(fileName);
  };

  return (
    <>
      <React.Fragment>
        <Tooltip title="Generar QR">
          <IconButton onClick={handleClickOpen}>
            <QrCodeIcon />
          </IconButton>
        </Tooltip>
        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">
            QR de Stock: {stockId}
          </DialogTitle>
          <DialogContent>
            <DialogContentText
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <QRcode value={value} id="qrcode" />
            </DialogContentText>
          </DialogContent>
          <DialogActions
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Button
              onClick={() => generatePDF(`${value}.pdf`)}
              autoFocus
              variant="contained"
            >
              Descargar PDF
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    </>
  );
};

export default QR;

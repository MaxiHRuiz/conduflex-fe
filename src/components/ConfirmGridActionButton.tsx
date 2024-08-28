import { useState, FC } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { GridActionsCellItem } from "@mui/x-data-grid";

interface IConfirmGridActionButtonProps {
  icon: JSX.Element;
  label: string;
  dialogTitle: string;
  dialogContent: string;
  disabled: boolean;
  buttonColor:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
  onConfirm: () => void;
}

const ConfirmGridActionButton: FC<IConfirmGridActionButtonProps> = ({
  label,
  dialogTitle,
  dialogContent,
  disabled,
  icon,
  buttonColor,
  onConfirm,
}) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirm = () => {
    onConfirm();
    setOpen(false);
  };

  return (
    <div>
      <GridActionsCellItem
        disabled={disabled}
        icon={icon}
        label={label}
        color={buttonColor}
        onClick={handleClickOpen}
      />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{dialogTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {dialogContent}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancelar
          </Button>
          <Button onClick={handleConfirm} color="primary" autoFocus>
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ConfirmGridActionButton;

import { useState, FC, ReactNode } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { IconButton, Tooltip } from "@mui/material";

interface IConfirmIconButtonProps {
  children: ReactNode;
  ariaLabel: string;
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

const ConfirmIconButton: FC<IConfirmIconButtonProps> = ({
  ariaLabel,
  dialogTitle,
  dialogContent,
  disabled,
  buttonColor,
  children,
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
      <Tooltip title={ariaLabel}>
        <IconButton
          aria-label={ariaLabel}
          size="small"
          disabled={disabled}
          color={buttonColor}
          onClick={handleClickOpen}
        >
          {children}
        </IconButton>
      </Tooltip>
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

export default ConfirmIconButton;

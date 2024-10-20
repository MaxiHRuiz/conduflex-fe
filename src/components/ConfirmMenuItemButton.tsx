import { useState, FC } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { ListItemIcon, MenuItem } from "@mui/material";

interface IConfirmMenuItemButtonProps {
  icon: JSX.Element;
  label: string;
  dialogTitle: string;
  dialogContent: string;
  disabled: boolean;
  onConfirm: () => void;
}

const ConfirmMenuItemButton: FC<IConfirmMenuItemButtonProps> = ({
  label,
  dialogTitle,
  dialogContent,
  disabled,
  icon,
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
      <MenuItem disabled={disabled}>
        <ListItemIcon onClick={handleClickOpen}>{icon}</ListItemIcon>
        {label}
      </MenuItem>
      ;
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

export default ConfirmMenuItemButton;

import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Clients } from "pages/clients/clients";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { IClient } from "types/client";

interface IClientModalProps {
  onHandleClient: (client: IClient) => void;
}

export default function ClientModal({ onHandleClient }: IClientModalProps) {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClient = (client: IClient) => {
    onHandleClient(client)
    handleClose()
  }

  return (
    <React.Fragment>
      <IconButton
        aria-label="Seleccionar cliente"
        size="small"
        sx={{ mx: 1 }}
        onClick={handleClickOpen}
      >
        <AddIcon />
      </IconButton>
      <Dialog fullWidth maxWidth="md" open={open} onClose={handleClose}>
        <DialogTitle>Clientes</DialogTitle>
        <DialogContent>
          <Clients isOrderTable onHandleClient={handleClient} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

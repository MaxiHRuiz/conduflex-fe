import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';

interface SessionDialogProps {
  open: boolean;
  onClose: () => void;
  onRefresh: () => void;
}

const SessionDialog: React.FC<SessionDialogProps> = ({ open, onClose, onRefresh }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Sesión Expirada</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Tu sesión ha expirado. ¿Quieres mantener la sesión abierta?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          No
        </Button>
        <Button onClick={onRefresh} color="primary" autoFocus>
          Sí
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SessionDialog;

import { Button } from "@mui/material";
import TicketActionsContainer from "./TicketActionsContainer";

interface TicketActionsProps {
  disabledDelete: boolean;
  editActive: boolean;
  disabledActions: boolean;
  onConfirmUpdate: () => void;
  onCancel: () => void;
  onDelete: () => void;
  onActiveUpdate: () => void;
}

const TicketActions = ({
  disabledDelete,
  editActive,
  disabledActions,
  onConfirmUpdate,
  onCancel,
  onDelete,
  onActiveUpdate,
}: TicketActionsProps) => {
  if (editActive) {
    return (
      <TicketActionsContainer>
        <Button size="small" variant="contained" onClick={onConfirmUpdate}>
          Modificar
        </Button>
        <Button size="small" onClick={onCancel}>
          Cancelar
        </Button>
      </TicketActionsContainer>
    );
  }
  return (
    <TicketActionsContainer>
      {!disabledDelete && <Button size="small" disabled={disabledActions} onClick={onDelete}>
        Eliminar
      </Button>}
      <Button size="small" disabled={disabledActions} onClick={onActiveUpdate}>
        Editar
      </Button>
    </TicketActionsContainer>
  );
};

export default TicketActions;

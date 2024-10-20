import { FormControlLabel, Checkbox } from "@mui/material";
import ConfirmButton from "./ConfirmButton";
import { GridRowSelectionModel } from "@mui/x-data-grid";
import { useAppContext } from "context/RoleContext";
import { useEffect, useState } from "react";
interface IAproveStockSectionProps {
  status: string;
  setStatus: (value: string) => void;
  subStatus: string;
  setSubStatus: (value: string) => void;
  rowSelectionModel: GridRowSelectionModel;
  onApprove: () => void
}

const ApproveStockSection = ({
  status,
  setStatus,
  subStatus,
  setSubStatus,
  rowSelectionModel,
  onApprove
}: IAproveStockSectionProps) => {
  const { role } = useAppContext();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (
      checked &&
      (subStatus !== "no_disponible" || status !== "no_disponibles")
    ) {
      setChecked(false);
      return;
    }
    if (subStatus === "no_disponible" && status === "no_disponibles") {
      setChecked(true);
    }
  }, [subStatus, status]);

  useEffect(() => {
    if (checked) {
      setSubStatus("no_disponible");
      setStatus("no_disponibles");
      return;
    }
  }, [checked]);

  return (
    <div
      style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
    >
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            color="secondary"
            name="Interruptor para cambiar tabla"
            onChange={(e) => {
              setChecked(e.target.checked);
            }}
          />
        }
        label={`Pendientes de verificación: ${checked ? "Si" : "No"}`}
      />
      <div>
        <ConfirmButton
          buttonText="Aprobar"
          dialogTitle="Confirmar acción"
          dialogContent={
            rowSelectionModel.length === 1
              ? "¿Estás seguro de que deseas aprobar este stocks?"
              : "¿Estás seguro de que deseas aprobar estos stocks?"
          }
          buttonColor="success"
          disabled={subStatus !== "no_disponible" || status !== "no_disponibles" || role !== "admin" || rowSelectionModel.length === 0}
          onConfirm={onApprove}
        />
      </div>
    </div>
  );
};

export default ApproveStockSection;

import React, { useState } from "react";
import {
  Badge,
  BadgeProps,
  Button,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  styled,
  Tooltip,
} from "@mui/material";
import OrderListContent from "./orderListContent";
import { useTodo } from "context/TodoContext";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Delete from "@mui/icons-material/Delete";

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 7,
    top: 8,
  },
}));

const DropdownButton: React.FC = () => {
  const { order, deleteOrder } = useTodo();
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => setAnchorEl(null);

  const handleItemClick = () => {
    handleClose();
    navigate("/pedidos/nuevo");
  };

  const handleDeleteOrder = () => {
    deleteOrder();
    toast.info("Se elimino el pedido pendiente");
    navigate('/pedidos')
    handleClose();
  };

  return (
    <div>
      <Tooltip title="Pedido pendiente">
        <StyledBadge
          variant="dot"
          invisible={!order?.productos?.length}
          color="info"
        >
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls="order-menu"
            aria-haspopup="true"
          >
            <ListAltIcon />
          </IconButton>
        </StyledBadge>
      </Tooltip>
      <Menu
        id="order-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleItemClick} disabled={!order.vendedor}>
          <OrderListContent order={order} />
        </MenuItem>
        <MenuItem onClick={handleDeleteOrder} disabled={!order.vendedor}>
          <ListItemIcon>
            <Delete fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Eliminar pedido" />
        </MenuItem>
      </Menu>
    </div>
  );
};

export default DropdownButton;

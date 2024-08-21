import React, { useState } from "react";
import {
  Badge,
  BadgeProps,
  Button,
  IconButton,
  Menu,
  MenuItem,
  styled,
  Tooltip,
} from "@mui/material";
import OrderListContent from "./orderListContent";
import { useTodo } from "context/TodoContext";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { useNavigate } from "react-router-dom";

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 7,
    top: 8,
  },
}));

const DropdownButton: React.FC = () => {
  const {order} = useTodo()
  const navigate = useNavigate()

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => 
    setAnchorEl(null);

  const handleItemClick = () =>{
    handleClose()
    navigate('/pedidos/nuevo')
  }

  return (
    <div>
      <Tooltip title="Account settings">
        <StyledBadge
          variant="dot"
          invisible={!order.product_stock.length}
          color="info"
        >
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls="order-menu"
            aria-haspopup="true"
            // aria-expanded={open ? "true" : undefined}
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
        <MenuItem onClick={handleItemClick}>
          <OrderListContent order={order} />
        </MenuItem>
      </Menu>
    </div>
  );
};

export default DropdownButton;

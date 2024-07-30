import React from "react";
import Add from "./show";
import Delete from "./delete";
import Edit from "./edit";
import { ActionsProps } from "./IActionsProps";
import { PersonAdd, Settings, Logout } from "@mui/icons-material";
import {
  Tooltip,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Actions = ({ code }: ActionsProps) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  if (fullScreen) {
    return (
      <React.Fragment>
        <Tooltip title="Menu">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <MoreVertIcon />
          </IconButton>
        </Tooltip>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <Add buttonType="menuItem" code={code} formType="product" />
          <Edit buttonType="menuItem" code={code} formType="product" />
          <Delete buttonType="menuItem" code={code} formType="product" />
        </Menu>
      </React.Fragment>
    );
  }
  return (
    <div>
      <Add code={code} formType="product" />
      <Edit code={code} formType="product" />
      <Delete code={code} formType="product" />
    </div>
  );
};

export default Actions;

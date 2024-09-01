import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Tooltip, IconButton, Avatar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/Auth";
import { useAppContext } from "context/RoleContext";

export const LoginButton = () => {
  const settings = ["signOut"];
  const { role } = useAppContext();
  const { userSession } = useAuth();
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const { signOut } = useAuth();

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar
            alt={userSession?.user.email?.toUpperCase()}
            src="/static/images/avatar/2.jpg"
          />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {/* <MenuItem disableTouchRipple disabled> */}
        <Typography gutterBottom textAlign="center" mx={2}>{`${
          userSession?.user?.email || ""
        }`}</Typography>
        <Typography gutterBottom textAlign="left" mx={2}>{`Rol: ${
          role === "vendor"
            ? "Vendedor"
            : role === "admin"
            ? "Administrador"
            : role === "operator"
            ? "Operador"
            : role
        }`}</Typography>
        {/* </MenuItem> */}
        <MenuItem onClick={() => signOut()}>
          <Typography textAlign="center">Cerrar sesión</Typography>
        </MenuItem>
      </Menu>
    </>
  );
};

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import logo from "../../assets/images/logo-conduflex-logo.png";
import { LoginButton } from "./loginButton";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/Auth";
import ListAltIcon from "@mui/icons-material/ListAlt";
import styled from "styled-components";
import { Badge, BadgeProps } from "@mui/material";
import { useTodo } from "../../context/TodoContext";

const pages = ["productos", "stocks", "pedidos"];

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    padding: "0 4px",
  },
}));

function ResponsiveAppBar() {
  const { userSession } = useAuth();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const navigate = useNavigate();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" color="transparent">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
            <img
              src={logo}
              alt="logo"
              style={{ height: "30%", width: "30%" }}
            />
          </Box>
          {userSession?.user && (
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                marginLeft: 4,
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
                color="secondary"
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={() => navigate(`/${page}`)}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          )}
          <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
            <img
              src={logo}
              alt="logo"
              style={{ height: "50%", width: "50%" }}
            />
          </Box>
          {userSession?.user && (
            <>
              <Box sx={{ px: 1 }}>
                <IconButton aria-label="Lista">
                  <StyledBadge badgeContent={0} color="primary" onClick={handleOpenNavMenu}>
                    <ListAltIcon />
                  </StyledBadge>
                </IconButton>
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
                  onClose={handleCloseNavMenu}
                >
                  <MenuItem>
                    <Typography textAlign="center">Cerrar sesión</Typography>
                  </MenuItem>
                  <MenuItem>
                    <Typography textAlign="center">Cerrar sesión</Typography>
                  </MenuItem>
                  <MenuItem>
                    <Typography textAlign="center">Cerrar sesión</Typography>
                  </MenuItem>
                  <MenuItem>
                    <Typography textAlign="center">Cerrar sesión</Typography>
                  </MenuItem>
                </Menu>
              </Box>

              <Box
                sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, pr: 1 }}
              >
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={() => navigate(`/${page}`)}
                    sx={{ my: 2, display: "block" }}
                    color="primary"
                  >
                    {page}
                  </Button>
                ))}
              </Box>
              <Box sx={{ flexGrow: 0 }}>
                <LoginButton />
              </Box>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
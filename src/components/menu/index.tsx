import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Drawer } from "@mui/material"; // Importar o Drawer para o menu lateral
import { Link } from "react-router-dom";

const pages = [
  { label: "Início", path: "/" },
  { label: "Marcações", path: "/schedule" },
  { label: "Contacto", path: "/contact" },
];

export interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [openDrawer, setOpenDrawer] = React.useState(false); // Estado para controlar o Drawer

  // Funções para abrir e fechar o Drawer
  const toggleDrawer = (open: boolean) => {
    setOpenDrawer(open);
  };

  return (
    <AppBar
      className={className}
      position="static"
      sx={{
        backgroundColor: "#2E3641",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
      }}
    >
      <Toolbar>
        {/* LOGO */}
        <Typography
          component={Link}
          to={"/"}
          variant="h5"
          sx={{
            flexGrow: 1,
            fontFamily: "Alfa Slab One, serif",
            fontWeight: "bold",
            color: "white",
            letterSpacing: "2px",
            textDecoration: "none",
          }}
        >
          O BARBEIRO SOU EU
        </Typography>

        {/* MENU DESKTOP */}
        {!isMobile ? (
          <Box sx={{ display: "flex", gap: 2 }}>
            {pages.map((page, i) => (
              <Button
                key={i}
                component={Link}
                to={page.path}
                color="inherit"
                sx={{
                  fontSize: "16px",
                  fontWeight: "500",
                  "&:hover": {
                    backgroundColor: "white",
                    color: "#2E3641",
                  },
                }}
              >
                {page.label}
              </Button>
            ))}
          </Box>
        ) : (
          <>
            {/* MENU MOBILE - ÍCONE DE MENU HAMBURGUER */}
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              onClick={() => toggleDrawer(true)} // Abre o Drawer ao clicar
            >
              <MenuIcon />
            </IconButton>

            {/* DRAWER - Menu Lateral Deslizante */}
            <Drawer
              anchor="right"
              open={openDrawer}
              onClose={() => toggleDrawer(false)} // Fecha o Drawer
            >
              <Box
                sx={{
                  width: 250,
                  padding: "16px",
                  backgroundColor: "#2E3641",
                  height: "100%",
                }}
              >
                {pages.map((page, i) => (
                  <MenuItem
                    key={i}
                    component={Link}
                    to={page.path}
                    onClick={() => toggleDrawer(false)} // Fecha o menu ao clicar
                    sx={{
                      color: "white",
                      fontSize: "18px",
                      fontWeight: "500",
                      "&:hover": {
                        backgroundColor: "white",
                        color: "#2E3641",
                      },
                    }}
                  >
                    {page.label}
                  </MenuItem>
                ))}
              </Box>
            </Drawer>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

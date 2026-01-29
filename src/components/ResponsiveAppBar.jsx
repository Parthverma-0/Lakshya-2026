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
import { Link } from "react-router-dom";

const pages = [
  { name: "Timeline", sectionId: "timeline" },
  { name: "Events", sectionId: "events" },
  { name: "Sponsor", sectionId: "sponsor" },
  { name: "Gallery", sectionId: "gallery" },
  { name: "Our Team", sectionId: "team" },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
        pt: 0,
      }}
    >
      {/* top checker strip */}
      <Box
        sx={{
          width: "100%",
          height: "30px",
          backgroundImage: "url('/black.webp')",
          backgroundSize: "auto",
          backgroundRepeat: "repeat-x",
          backgroundPosition: "center",
        }}
      />

      {/* nav bar layer */}
      <Box
        sx={{
          width: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          backdropFilter: "blur(5px)",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters variant="dense" sx={{ minHeight: "50px" }}>
            {/* logo */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mr: 5,
              }}
            >
              <Link to="/">
                <img
                  src="/logo1.png"
                  alt="Logo"
                  style={{
                    height: "60px",
                    width: "60px",
                    objectFit: "cover",
                    borderRadius: "50%",
                    marginLeft: "100px",
                  }}
                />
              </Link>
            </Box>

            {/* mobile menu icon */}
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                keepMounted
                transformOrigin={{ vertical: "top", horizontal: "left" }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page.name}
                    onClick={() => {
                      handleCloseNavMenu();
                      scrollToSection(page.sectionId);
                    }}
                  >
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* desktop links */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "right",
                gap: 4,
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page.name}
                  onClick={() => scrollToSection(page.sectionId)}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    fontWeight: 500,
                    textTransform: "none",
                    fontSize: "1rem",
                    "&:hover": {
                      color: "#ff0000",
                    },
                  }}
                >
                  {page.name}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </Box>
    </AppBar>
  );
}

export default ResponsiveAppBar;

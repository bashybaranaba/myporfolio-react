import * as React from "react";
import { styled } from "@mui/material/styles";
import {
  AppBar,
  Container,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Box,
  Button,
  Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

const pages = ["About me", "Skills", "Projects", "Contact"];
const pageSectionId = ["about", "skills", "projects", "contacts"];

const StyledBox = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  display: "flex",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const MobileBox = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  display: "none",
  [theme.breakpoints.down("md")]: {
    display: "flex",
  },
}));

const StyledMenu = styled(Menu)({
  display: { xs: "block", md: "none" },
});

const StyledButton = styled(Button)({
  margin: "8px", // Equivalent to my: 2
  color: "inherit",
  display: "block",
  textTransform: "none",
});

const LogoTypography = styled(Typography)({
  marginLeft: "8px",
  fontWeight: 600,
  display: { xs: "none", md: "flex" },
});

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar component="nav" color="secondary">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Avatar alt="Remy Sharp" src="assets/images/logo.png" />
          <LogoTypography variant="subtitle1" component="div">
            Baranaba Mugabane
          </LogoTypography>
          <StyledBox />

          <MobileBox>
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
            <StyledMenu
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
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </StyledMenu>
          </MobileBox>

          <StyledBox>
            {pages.map((page) => (
              <StyledButton
                key={page}
                //move to the section of the page
                href={`#${pageSectionId[pages.indexOf(page)]}`}
                //remove the underline
                underline="none"
                onClick={() =>
                  document
                    .getElementById(pageSectionId[pages.indexOf(page)])
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                {page}
              </StyledButton>
            ))}
          </StyledBox>

          <Box sx={{ flexGrow: 0 }} />
          <Button
            variant="outlined"
            sx={{ textTransform: "none" }}
            startIcon={<FileDownloadOutlinedIcon />}
          >
            Download CV
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;

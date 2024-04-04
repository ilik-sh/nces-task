import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Email, Equalizer, Info, Phone } from "@mui/icons-material";
import { styled } from "@mui/material";
import LogoLink from "./logo-link.comp";
import { useNavigate } from "react-router-dom";

const StyledLogo = styled(LogoLink)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const StyledBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
});

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

function ResponsiveAppBar() {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleLogoClicked = () => {
    navigate("/");
  };

  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{ width: "100%" }}
    >
      <StyledToolbar>
        <StyledLogo
          Icon={Equalizer}
          text="Statistics"
          onClick={handleLogoClicked}
        />
        <StyledBox
          style={{ gap: "20px" }}
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          <StyledBox>
            <Email />
            <Typography
              variant="h6"
              component={"a"}
              href="mailto: i.shyshparonak@gmail.com"
            >
              i.shyshparonak@gmail.com
            </Typography>
          </StyledBox>
          <StyledBox>
            <Phone />
            <Typography variant="h6" component={"a"} href="tel:+375447737319">
              +375(44)773-73-19
            </Typography>
          </StyledBox>
        </StyledBox>
        <StyledBox sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <Info />
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
          >
            <MenuItem onClick={handleCloseNavMenu}>
              <Typography
                textAlign="center"
                component={"a"}
                href="mailto: i.shyshparonak@gmail.com"
              >
                i.shyshparonak@gmail.com
              </Typography>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
              <Typography
                textAlign="center"
                component={"a"}
                href="tel:+375447737319"
              >
                +375(44)773-73-19
              </Typography>
            </MenuItem>
          </Menu>
        </StyledBox>
      </StyledToolbar>
    </AppBar>
  );
}
export default ResponsiveAppBar;

import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const headerStyle = {
    color: "white",
    textDecoration: "none",
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography>
          <NavLink style={headerStyle} to="/">
            Home
          </NavLink>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography>Home</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

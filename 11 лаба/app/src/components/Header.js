import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Logo from './Logo';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Link to='/'>
          <Logo className="header-logo"/>
        </Link>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, textAlign: "center" }}
        >
          Система управления отделом сервисного обслуживания
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;

import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: "auto",
        py: 2,
        backgroundColor: "primary.main",
        position: "fixed",
        bottom: 0,
        width: "100%",
      }}
    >
      <Container maxWidth="md" sx={{ display: 'flex', justifyContent: 'space-around' }}>
        <Link to="/handbook" style={{ textDecoration: 'none' }}>
          <Typography
            variant="body2"
            color="white"
            align="center"
            gutterBottom
          >
            Памятка работника
          </Typography>
        </Link>
        <Link to="/support"  style={{ textDecoration: 'none' }}>
          <Typography variant="body2" color="white" align="center"> 
            Поддержка
          </Typography>
        </Link>
      </Container>
    </Box>
  );
}

export default Footer;

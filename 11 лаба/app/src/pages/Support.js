import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

function Support() {
  return (
    <>
      <Header />
      <div className="main">
        <Container maxWidth="md">
          <Box sx={{ mt: 4 }}>
            <Typography variant="h4" gutterBottom>
              Контакты поддержки
            </Typography>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Typography variant="h6">Адрес:</Typography>
                  <Typography>
                    123 Стройительная улица, город Техноград, Страна Сервисии
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="h6">Телефон:</Typography>
                  <Typography>+1 (555) 123-4567</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h6">Электронная почта:</Typography>
                  <Typography>support@autoservicecenter.com</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h6">График работы:</Typography>
                  <Typography>
                    Пн-Пт: 9:00 - 18:00, Сб: 10:00 - 15:00
                  </Typography>
                </Grid>
                <Box sx={{ mt: 2, textAlign: "center" }}>
                  <Logo className="support-logo" />
                </Box>
              </Grid>
            </Paper>
          </Box>
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default Support;

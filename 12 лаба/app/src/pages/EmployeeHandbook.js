import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

function EmployeeHandbook() {
  return (
    <>
      <Header />
      <div className="main">
        <Container maxWidth="md">
          <Box sx={{ mt: 4 }}>
            <Typography variant="h4" gutterBottom>
              Памятка работника сервисного отдела
            </Typography>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="h6">1. Замена масла</Typography>
                  <Typography>
                    - Проводите слив старого масла в соответствии с инструкциями.
                  </Typography>
                  <Typography>
                    - Заменяйте масляный фильтр при каждой замене масла.
                  </Typography>
                  <Typography>
                    - Заправляйте новое масло в двигатель автомобиля.
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h6">2. Шиномонтаж</Typography>
                  <Typography>- Осуществляйте снятие и установку шин.</Typography>
                  <Typography>
                    - Проводите балансировку колес для обеспечения комфортного
                    вождения.
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h6">3. Покраска авто</Typography>
                  <Typography>
                    - Подготавливайте поверхность автомобиля перед покраской.
                  </Typography>
                  <Typography>
                    - Наносите краску и защитное покрытие согласно стандартам.
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Box>
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default EmployeeHandbook;

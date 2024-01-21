import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import ServiceCard from "../components/ServiceCard";
import ServiceModal from "../components/ServiceModal";
import services from "../data/services.json";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";

function Services() {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(null);

  const handleModalOpen = (service) => {
    setSelectedService(service);
  };

  const handleModalClose = () => {
    setSelectedService(null);
  };

  const handleButtonClick = () => {
    navigate("/employees");
  };

  return (
    <>
      <Header />
      <div className="main">
        <div style={{ textAlign: "right" }}>
          <Button onClick={handleButtonClick}>Управление работниками</Button>
        </div>
        <Typography
          variant="h4"
          style={{ textAlign: "center", marginBottom: "3vh" }}
        >
          Наши услуги:
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {services.map((service, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <ServiceCard
                service={service}
                handleModalOpen={() => handleModalOpen(service)}
              />
            </Grid>
          ))}
        </Grid>
        {selectedService && (
          <ServiceModal
            open={Boolean(selectedService)}
            service={selectedService}
            onClose={handleModalClose}
          />
        )}
      </div>
      <Footer />
    </>
  );
}

export default Services;

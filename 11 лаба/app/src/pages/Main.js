import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";

function Main() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/services");
  };

  return (
    <>
      <Header />
      <div
        className="main"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" sx={{ marginBottom: "0.5vh" }}>
          Добро пожаловать!
        </Typography>
        <Typography variant="h6" align="center" sx={{ marginBottom: "2vh" }}>
          Мы предоставляем высококачественные услуги по замене масла,
          шиномонтажу и покраске автомобилей. Наши профессионалы готовы
          обеспечить заботу о вашем авто. Нажмите "Начать работу", чтобы узнать
          больше!
        </Typography>
        <Button onClick={handleButtonClick}>Начать работу</Button>
      </div>
      <Footer />
    </>
  );
}

export default Main;

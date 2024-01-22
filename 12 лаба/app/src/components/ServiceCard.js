import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "./Button";
import Box from "@mui/material/Box";

function ServiceCard({ service, handleModalOpen }) {
  const  {name, banner} = service;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" alt={name} height="140" image={banner} />
      <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Box sx={{ marginTop: 2 }}>
          <Button onClick={handleModalOpen}>Подробнее</Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default ServiceCard;

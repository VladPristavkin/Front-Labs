import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "./Button";

function EmployeeCard({ employee, onClick }) {
  const { firstName, lastName, typeOfService } = employee;

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {firstName} {lastName}
        </Typography>
        <Typography color="text.secondary" gutterBottom>
          {typeOfService}
        </Typography>
        <Button onClick={onClick}>Уволить</Button>
      </CardContent>
    </Card>
  );
}

export default EmployeeCard;

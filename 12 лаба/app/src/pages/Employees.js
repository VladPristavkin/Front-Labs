import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import EmployeeCard from "../components/EmployeeCard";
import { useEmployeeContext } from "../context/EmployeeContext";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

function Employees() {
  const navigate = useNavigate();
  const { employees, removeEmployee } = useEmployeeContext();

  const handleServiceClick = () => {
    navigate("/services");
  };

  const handleAddEmployeeClick = () => {
    navigate("/addEmployee");
  };

  return (
    <>
      <Header />
      <div className="main">
        <Box sx={{ display: "flex", justifyContent: "space-between", marginBottom: "3vh" }}>
          <Button onClick={handleServiceClick}>Список услуг</Button>
          <Button onClick={handleAddEmployeeClick}>Добавить сотрудника</Button>
        </Box>
        <Typography
          variant="h4"
          style={{ textAlign: "center", marginBottom: "3vh" }}
        >
          Работники отдела:
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {employees.map((employee, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <EmployeeCard
                employee={employee}
                onClick={() => removeEmployee(index)}
              />
            </Grid>
          ))}
        </Grid>
      </div>
      <Footer />
    </>
  );
}

export default Employees;

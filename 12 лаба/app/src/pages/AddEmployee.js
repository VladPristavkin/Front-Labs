import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import AddEmployeeModal from "../components/AddEmployeeModal";
import services from "../data/services.json";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Grid,
} from "@mui/material";
import { useEmployeeContext } from "../context/EmployeeContext";
import { useNavigate } from "react-router";

function AddEmployee() {
  const navigate = useNavigate();
  const { addEmployee } = useEmployeeContext();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddEmployee = () => {
    if (firstName && lastName && selectedService) {
      setIsModalOpen(true);
    } else {
      alert("Заполните все поля");
    }
  };

  const handleBackClick = () => {
    navigate("/employees");
  };

  const handleModalChange = () => {
    setIsModalOpen(false);
  };

  const handleModalCancel = () => {
    setIsModalOpen(false);
    setFirstName("");
    setLastName("");
    setSelectedService("");
  };

  const handleModalAdd = () => {
    const newEmployee = {
      firstName,
      lastName,
      typeOfService: selectedService,
    };
    addEmployee(newEmployee);

    setFirstName("");
    setLastName("");
    setSelectedService("");
    setIsModalOpen(false);
  };

  return (
    <>
      <Header />
      <div className="main">
        <Button onClick={handleBackClick}>Назад</Button>
        <Typography variant="h3" sx={{ marginTop: "4vh" }}>
          Добавить сотрудника
        </Typography>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <TextField
                  label="Имя"
                  variant="outlined"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  margin="normal"
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <TextField
                  label="Фамилия"
                  variant="outlined"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  margin="normal"
                />
              </FormControl>
            </Grid>
          </Grid>
          <FormControl fullWidth variant="outlined" margin="normal">
            <InputLabel id="service-select-label">Выберите услугу</InputLabel>
            <Select
              labelId="service-select-label"
              id="service-select"
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              label="Выберите услугу"
            >
              {services.map((service, index) => (
                <MenuItem key={index} value={service.name}>
                  {service.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button onClick={handleAddEmployee}>Добавить</Button>
        </form>
        {isModalOpen && (
          <AddEmployeeModal
            newEmployee={{
              firstName,
              lastName,
              typeOfService: selectedService,
            }}
            changeEmployee={handleModalChange}
            onClose={handleModalCancel}
            addEmployee={handleModalAdd}
          />
        )}
      </div>
      <Footer />
    </>
  );
}

export const handleAddEmployee = AddEmployee.handleAddEmployee;
export default AddEmployee;

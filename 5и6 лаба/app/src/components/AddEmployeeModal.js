import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import Button from "./Button";

function AddEmployeeModal({ newEmployee, changeEmployee, onClose, addEmployee }) {
  const { firstName, lastName, typeOfService } = newEmployee;

  return (
    <Dialog open={true}>
      <DialogTitle>Подтверждение добавления сотрудника</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Вы уверены, что хотите добавить нового сотрудника с данными:
          <br />
          Имя: {firstName}
          <br />
          Фамилия: {lastName}
          <br />
          Услуга: {typeOfService}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Отмена</Button>
        <Button onClick={changeEmployee}>Изменить данные</Button>
        <Button onClick={addEmployee}>Добавить</Button>
      </DialogActions>
    </Dialog>
  );
}

export default AddEmployeeModal;

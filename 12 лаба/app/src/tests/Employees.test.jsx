import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Employees from "../pages/Employees";
import { EmployeeProvider } from "../context/EmployeeContext";

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

it('handles "Список услуг" button click correctly', () => {
  render(
    <EmployeeProvider>
      <MemoryRouter>
        <Employees />
      </MemoryRouter>
    </EmployeeProvider>
  );

  fireEvent.click(screen.getByText('Список услуг'));

  expect(mockNavigate).toHaveBeenCalled();
  expect(mockNavigate).toHaveBeenCalledWith("/services");
});

it('renders Employees component and checks for essential elements', () => {
  render(
    <EmployeeProvider>
      <MemoryRouter>
        <Employees />
      </MemoryRouter>
    </EmployeeProvider>
  );

  expect(screen.getByText('Работники отдела:')).toBeInTheDocument();
  expect(screen.getByText('Список услуг')).toBeInTheDocument();
  expect(screen.getByText('Добавить сотрудника')).toBeInTheDocument();
});

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Services from "../pages/Services";

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

it('navigates to "/employees" when "Управление работниками" button is clicked', () => {
  render(
    <MemoryRouter>
      <Services />
    </MemoryRouter>
  );

  fireEvent.click(screen.getByText('Управление работниками'));

  expect(mockNavigate).toHaveBeenCalled();
  expect(mockNavigate).toHaveBeenCalledWith("/employees");
});
 
it('does not display the modal when no service is selected', () => {
  render(
    <MemoryRouter>
      <Services />
    </MemoryRouter>
  );

  expect(screen.queryByText('Модальное окно')).not.toBeInTheDocument();
});
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AddEmployee from '../pages/AddEmployee'; 
import { EmployeeProvider } from '../context/EmployeeContext';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('AddEmployee', () => {
    it('renders AddEmployee component', () => {
        render(
          <EmployeeProvider>
            <MemoryRouter>
              <AddEmployee />
            </MemoryRouter>
          </EmployeeProvider>
        );
      
        expect(screen.getByText('Добавить сотрудника')).toBeInTheDocument();
      
        expect(screen.getByText('Назад')).toBeInTheDocument();
        expect(screen.getByLabelText('Имя')).toBeInTheDocument();
        expect(screen.getByLabelText('Фамилия')).toBeInTheDocument();
        expect(screen.getByLabelText('Выберите услугу')).toBeInTheDocument();
        expect(screen.getByText('Добавить')).toBeInTheDocument();
      });

  it('handles user input correctly', () => {
    render(
      <EmployeeProvider>
        <MemoryRouter>
          <AddEmployee />
        </MemoryRouter>
      </EmployeeProvider>
    );
  
    const nameInput = screen.getByLabelText('Имя');
    const lastNameInput = screen.getByLabelText('Фамилия');
    const serviceSelect = screen.getByLabelText('Выберите услугу');
  
    fireEvent.change(nameInput, { target: { value: 'John' } });
    fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
  
    fireEvent.mouseDown(serviceSelect); 
    const serviceOption = screen.getByText("Покраска авто"); 
    fireEvent.click(serviceOption); 
  });
  

  it('handles button click correctly', () => {
    render(
      <EmployeeProvider>
        <MemoryRouter>
          <AddEmployee />
        </MemoryRouter>
      </EmployeeProvider>
    );

    const addButton = screen.getByText('Добавить');
    fireEvent.click(addButton);
  });
});

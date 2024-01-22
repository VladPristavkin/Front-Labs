import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';  
import EmployeeHandbook from '../pages/EmployeeHandbook';


it('renders EmployeeHandbook component and checks for essential elements', () => {
  render(
    <MemoryRouter>
      <EmployeeHandbook />
    </MemoryRouter>
  );

  expect(screen.getByText('Памятка работника сервисного отдела')).toBeInTheDocument();
  expect(screen.getByText('1. Замена масла')).toBeInTheDocument();
  expect(screen.getByText('2. Шиномонтаж')).toBeInTheDocument();
  expect(screen.getByText('3. Покраска авто')).toBeInTheDocument();
});

it('displays "1. Замена масла" section correctly', () => {
  render(
    <MemoryRouter>
      <EmployeeHandbook />
    </MemoryRouter>
  );

  expect(screen.getByText('- Проводите слив старого масла в соответствии с инструкциями.')).toBeInTheDocument();
  expect(screen.getByText('- Заменяйте масляный фильтр при каждой замене масла.')).toBeInTheDocument();
  expect(screen.getByText('- Заправляйте новое масло в двигатель автомобиля.')).toBeInTheDocument();
});

it('displays "2. Шиномонтаж" section correctly', () => {
  render(
    <MemoryRouter>
      <EmployeeHandbook />
    </MemoryRouter>
  );

  expect(screen.getByText('- Осуществляйте снятие и установку шин.')).toBeInTheDocument();
  expect(screen.getByText('- Проводите балансировку колес для обеспечения комфортного вождения.')).toBeInTheDocument();
});

it('displays responsive design for "1. Замена масла" section', () => {
  render(
    <MemoryRouter>
      <EmployeeHandbook />
    </MemoryRouter>
  );

  const section1 = screen.getByText('1. Замена масла');
  
  expect(section1).toBeInTheDocument();
  
  global.innerWidth = 480;
  global.dispatchEvent(new Event('resize'));

  expect(section1).toBeInTheDocument();

  global.innerWidth = 1024;
  global.dispatchEvent(new Event('resize'));
});

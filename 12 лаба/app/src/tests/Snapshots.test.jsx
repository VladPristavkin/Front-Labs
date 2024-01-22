import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/react';
import { EmployeeProvider } from '../context/EmployeeContext';
import { MemoryRouter } from 'react-router-dom';

import AddEmployee from '../pages/AddEmployee';
import EmployeeHandbook from '../pages/EmployeeHandbook';
import Employees from '../pages/Employees';
import Main from '../pages/Main';
import Services from '../pages/Services';
import Support from '../pages/Support';

import AddEmployeeModal from '../components/AddEmployeeModal';
import Button from '../components/Button';
import EmployeeCard from '../components/EmployeeCard';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Logo from '../components/Logo';
import ServiceCard from '../components/ServiceCard';
import ServiceModal from '../components/ServiceModal';

test('renders AddEmployee component correctly', () => {
  const { container } = render(
    <MemoryRouter>
      <EmployeeProvider>
        <AddEmployee />
      </EmployeeProvider>
    </MemoryRouter>
  );
  expect(container).toMatchSnapshot();
});

test('renders EmployeeHandbook component correctly', () => {
  const { container } = render(
    <MemoryRouter>
      <EmployeeHandbook />
    </MemoryRouter>
  );
  expect(container).toMatchSnapshot();
});

test('renders Employees component correctly', () => {
  const { container } = render(
    <MemoryRouter>
      <EmployeeProvider>
        <Employees />
      </EmployeeProvider>
    </MemoryRouter>
  );
  expect(container).toMatchSnapshot();
});

test('renders Main component correctly', () => {
  const { container } = render(
    <MemoryRouter>
      <Main />
    </MemoryRouter>
  );
  expect(container).toMatchSnapshot();
});

test('renders Services component correctly', () => {
  const { container } = render(
    <MemoryRouter>
      <Services />
    </MemoryRouter>
  );
  expect(container).toMatchSnapshot();
});

test('renders Support component correctly', () => {
  const { container } = render(
    <MemoryRouter>
      <Support />
    </MemoryRouter>
  );
  expect(container).toMatchSnapshot();
});

test('renders AddEmployeeModal correctly', () => {
  const newEmployee = {
    firstName: 'John',
    lastName: 'Doe',
    typeOfService: 'SomeService',
  };

  const { container } = render(
    <AddEmployeeModal
      newEmployee={newEmployee}
      changeEmployee={() => {}}
      onClose={() => {}}
      addEmployee={() => {}}
    />
  );

  expect(container).toMatchSnapshot();
});

test('renders Button correctly', () => {
  const { container } = render(
    <Button onClick={() => {}} sx={{ margin: '10px' }}>
    </Button>
  );

  expect(container).toMatchSnapshot();
});

test('renders EmployeeCard correctly', () => {
  const employee = {
    firstName: 'John',
    lastName: 'Doe',
    typeOfService: 'Some Service',
  };

  const { container } = render(<EmployeeCard employee={employee} onClick={() => {}} />);

  expect(container).toMatchSnapshot();
});

test('renders Footer correctly', () => {
  const { container } = render(
    <MemoryRouter>
        <Footer />
    </MemoryRouter>
  );
  expect(container).toMatchSnapshot();
});

test('renders Header correctly', () => {
  const { container } = render(
    <MemoryRouter>
       <Header />
    </MemoryRouter>
  );
  expect(container).toMatchSnapshot();
});

test('renders Logo correctly', () => {
  const { container } = render(<Logo />);
  expect(container).toMatchSnapshot();
});

test('renders ServiceCard correctly', () => {
  const serviceData = {
    name: 'Test Service',
    banner: 'test-banner.jpg',
  };

  const { container } = render(<ServiceCard service={serviceData} />);
  expect(container).toMatchSnapshot();
});

test('renders ServiceModal correctly', () => {
  const serviceData = {
    name: 'Test Service',
    description: 'Description of the test service.',
    duration: '2 hours',
    banner: 'test-banner.jpg',
  };

  const { container } = render(<ServiceModal open={true} service={serviceData} onClose={() => {}} />);
  expect(container).toMatchSnapshot();
});

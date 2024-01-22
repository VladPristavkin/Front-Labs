import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Main from '../pages/Main';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('Main', () => {
  it('renders Main component correctly', () => {
    render(
      <MemoryRouter>
        <Main />
      </MemoryRouter>
    );
    
    expect(screen.getByText('Добро пожаловать!')).toBeInTheDocument();
    expect(
      screen.getByText(
        'Мы предоставляем высококачественные услуги по замене масла, шиномонтажу и покраске автомобилей. Наши профессионалы готовы обеспечить заботу о вашем авто. Нажмите "Начать работу", чтобы узнать больше!'
      )
    ).toBeInTheDocument();
    expect(screen.getByText('Начать работу')).toBeInTheDocument();
  });

  it('navigates to "/services" when "Начать работу" button is clicked', () => {
    const navigateMock = jest.fn();
    require('react-router-dom').useNavigate.mockImplementation(() => navigateMock);

    render(
      <MemoryRouter>
        <Main />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText('Начать работу'));

    expect(navigateMock).toHaveBeenCalledWith('/services');
  });
});

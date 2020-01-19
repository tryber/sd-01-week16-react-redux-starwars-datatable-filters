import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('Test inicial para ver o jest funcionando', () => {
  test('O componente App tem qu renderizar com o texto "Datatable"', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Datatable/i);
    expect(linkElement).toBeInTheDocument();
  });
});

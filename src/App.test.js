import React from 'react';
import { render } from '@testing-library/react';
import Loading from './components/Loading';

describe('Test inicial para ver o jest funcionando', () => {
  test('O componente Loading tem que renderizar com o texto "LOADING..."', () => {
    const { getByText } = render(<Loading />);
    const linkElement = getByText(/LOADING.../i);
    expect(linkElement).toBeInTheDocument();
  });
});

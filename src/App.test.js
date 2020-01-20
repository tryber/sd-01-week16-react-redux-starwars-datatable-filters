import React from 'react';
import { render, getByText } from '@testing-library/react';
import App from './App';

test('renders StarWars Datatable with Filters', () => {
  expect(/StarWars Datatable with Filters/i).toBeInTheDocument();
});

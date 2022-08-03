import 'react-native';
import React from 'react';
import { render } from '@testing-library/react-native';
import Movies from '../src/components/Movies';

var mockIsLoading = false;
var mockIsDataFetching = false;
var mockIsError = false;
var mockData = {};

jest.mock('../src/hooks/useFetchMovies', () => {
  return () => {
    return {
      isLoading: mockIsLoading,
      isFetching: mockIsDataFetching,
      isError: mockIsError,
      data: mockData,
    };
  };
});

describe('Movies screen', () => {
  it('while loading', () => {
    mockIsLoading = true;
    mockIsDataFetching = true;
    const { getByTestId } = render(<Movies />);
    expect(getByTestId('loader')).toBeTruthy();
  });

  it('while error', () => {
    mockIsLoading = false;
    mockIsDataFetching = false;
    mockIsError = true;
    const { getByTestId } = render(<Movies />);
    expect(getByTestId('error-message')).toBeTruthy();
  });

  it('while not loading and no error', () => {
    mockIsLoading = false;
    mockIsDataFetching = false;
    mockIsError = false;
    mockData = [];
    const { getByTestId } = render(<Movies />);
    expect(getByTestId('diets')).toBeTruthy();
  });
});

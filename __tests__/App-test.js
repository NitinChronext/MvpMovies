/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import { render } from '@testing-library/react-native';

describe('<App/>', () => {
  it('renders correctly', async () => {
    const tree = render(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

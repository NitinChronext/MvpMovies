import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const Search = ({ fillColor = '#a9a9a9' }) => {
  return (
    <Svg width={19} height={19} fill='none' xmlns='http://www.w3.org/2000/svg'>
      <Path
        d='M8.5.25a8.25 8.25 0 1 0 8.25 8.25A8.25 8.25 0 0 0 8.5.25ZM1.75 8.5a6.75 6.75 0 1 1 6.75 6.75A6.75 6.75 0 0 1 1.75 8.5Z'
        transform='translate(-.25 -.25)'
        style={{
          fillRule: 'evenodd',
          fill: fillColor,
        }}
      />
      <Path
        d='m14.47 15.53 4 4 1.06-1.06-4-4Z'
        transform='translate(-.25 -.25)'
        style={{
          fill: fillColor,
        }}
      />
    </Svg>
  );
};

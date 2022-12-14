import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';

const MovieSVG = ({ isActive = false }) => {
  return (
    <Svg
      xmlns='http://www.w3.org/2000/svg'
      width='36'
      height='36'
      viewBox='0 0 36 36'
    >
      <G>
        <Path
          fill={isActive ? '#A8D0FF' : '#999999'}
          d='M6.75 32.09h22.5a2.806 2.806 0 002.813-2.813v-16.84c0-7.992-28.126-8.644-28.126 0v16.84A2.806 2.806 0 006.75 32.09zm0 0'
        ></Path>
        <Path
          fill={isActive ? '#06F' : '#999999'}
          d='M16.586 1.512L2.53 9.625a2.815 2.815 0 00-1.031 3.84c.777 1.348 1.375 1.808 2.719 1.031L16.754 7.91c.89-.515 1.738-.437 2.527.02l12.5 6.566c1.344.774 1.942.313 2.715-1.031a2.81 2.81 0 00-1.027-3.84L19.406 1.504c-.176-.09-.703-.367-1.406-.375-.637-.008-1.262.3-1.414.383zm0 0'
        ></Path>
        <Path
          fill={isActive ? '#F3F3F3' : '#F3F3F3'}
          d='M11.906 15.766a4.763 4.763 0 00-4.773 4.773v11.527h9.547V20.54a4.763 4.763 0 00-4.774-4.773zm0 0'
        ></Path>
        <Path
          fill={isActive ? '#00A1FF' : '#D3D3D3'}
          d='M2.531 29.813H33.47c.777 0 1.406.625 1.406 1.406v2.25c0 .777-.629 1.406-1.406 1.406H2.53a1.405 1.405 0 01-1.406-1.406v-2.25c0-.782.629-1.407 1.406-1.407zm18.176-12.551h6.996c.777 0 1.406.629 1.406 1.406v5.695c0 .778-.629 1.407-1.406 1.407h-6.996a1.405 1.405 0 01-1.406-1.407v-5.695c0-.777.629-1.406 1.406-1.406zm0 0'
        ></Path>
      </G>
    </Svg>
  );
};

export default MovieSVG;

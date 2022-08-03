import * as React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

export const ClearIcon = () => {
  return (
    <Svg width={24} height={24} fill='none' xmlns='http://www.w3.org/2000/svg'>
      <Path
        d='m16 16-4-4M10.828 10.828 8 8M8 16l8-8'
        stroke='#8D8D8D'
        strokeWidth={1.2}
      />
      <Rect
        x={1}
        y={1}
        width={22}
        height={22}
        rx={11}
        stroke='#8D8D8D'
        strokeWidth={2}
      />
    </Svg>
  );
};

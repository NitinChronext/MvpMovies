import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';

const HeartSVG = ({ isActive = false }) => {
  return (
    <Svg
      xmlns='http://www.w3.org/2000/svg'
      width='36'
      height='36'
      viewBox='0 0 36 36'
    >
      <G>
        <Path
          fill={isActive ? '#D6493E' : '#fff'}
          d='M3.156 5.531c3.946-3.941 10.34-3.941 14.285 0l.54.543c2.722 9.043 2.472 18.61 0 28.567L3.155 19.816c-3.945-3.945-3.945-10.34 0-14.285zm0 0'
        ></Path>
        <Path
          fill={isActive ? '#D75A4A' : '#fff'}
          d='M32.805 5.531c-3.946-3.941-10.34-3.941-14.285 0l-.54.543v28.567l14.825-14.825c3.941-3.945 3.941-10.34 0-14.285zm0 0'
        ></Path>
      </G>
    </Svg>
  );
};

export default HeartSVG;

import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';

export const TabIconContainer = styled(Animated.View)`
  align-items: center;
`;
export const TabLabel = styled(Animated.Text)`
  font-size: 12px;
  color: (props) => (props.active ? '#000': 'red');
`;

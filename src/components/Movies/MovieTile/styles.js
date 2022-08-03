import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';
import { Text, TouchableOpacity, View, Image } from 'react-native';

export const Container = styled(Animated.View)`
  flex: 1;
  flex-direction: column;
  width: 250px;
  height: 300px;
  background-color: #fff;
  padding-left: 10px;
`;
export const Pressable = styled(TouchableOpacity)``;
export const ImageWrapper = styled(Image)`
  width: 100%;
  height: 80%;
  border-radius: 10px;
`;

export const DetailWrapper = styled(View)`
  width: 100%;
  height: 20%;
  padding-left: 5px;
  padding-top: 5px;
`;

export const Title = styled(Text)`
  width: 70%;
  font-size: 13px;
  letter-spacing: 0.5px;
  font-weight: 600;
`;

export const Heart = styled(Image)`
  width: 30%;
`;

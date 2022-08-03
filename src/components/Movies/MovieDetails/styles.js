import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';
import { Image, Text, View } from 'react-native';

export const Container = styled(Animated.View)`
  flex: 1;
  flex-direction: column;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 100px;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
export const ImageWrapper = styled(Image)`
  width: 90%;
  height: 35%;
`;

export const DetailWrapper = styled(View)`
  width: 100%;
  height: 65%;
`;

export const Title = styled(Text)`
  width: 70%;
  font-size: 13px;
  padding: 5px;
`;

export const Description = styled(Text)`
  font-size: 13px;
  padding: 5px;
`;

export const Cast = styled(Text)`
  font-size: 13px;
  padding: 5px;
`;

export const Heart = styled(Image)`
  width: 30%;
`;
export const RatingWrapper = styled(View)`
  height: 100px;
  width: 100%;
`;

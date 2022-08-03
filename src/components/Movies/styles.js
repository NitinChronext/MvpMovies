import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';
import { Text, SectionList } from 'react-native';

export const Container = styled(Animated.View)`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  padding-top: 5px;
`;

export const SectionListWrapper = styled(SectionList)`
  padding-top: 20px;
  width: 100%;
`;

export const SectionTitle = styled(Animated.Text)`
  font-size: 16px;
  height: 30px;
  width: 300px;
  text-align: left;
  font-weight: bold;
  padding-left: 10px;
  letter-spacing: 0.5px;
`;

export const SectionTitleWrapper = styled(Animated.View)`
  width: 100%;
`;

export const MessageWrapper = styled(Text)`
  width: 100%;
`;

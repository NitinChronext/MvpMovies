import styled from 'styled-components/native';
import { TextInput, View } from 'react-native';

export const SearchBarWrapper = styled(View)`
  height: 50px;
  width: 98%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding-left: 20px;
  border-radius: 15px;
  border-width: 5px;
  border-color: #a9a9a9;
`;

export const SearchIconWrapper = styled(View)``;

export const SearchInput = styled(TextInput)`
  font-size: 16px;
  padding-top: 0;
  padding-left: 5px;
  flex: 1;
`;

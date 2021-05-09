import styled from 'styled-components/native';

import colors from '../../shared/colors';

export const Container = styled.View`
  margin-bottom: 14px;
  background: ${colors.white};
`;

export const Input = styled.TextInput`
  flex: 1;
  font-family: 'Metropolis-Regular';
  font-size: 14px;
  color: ${colors.black};
`;

export const ViewInput = styled.View`
  flex-direction: row;
  border-bottom-width: 1px;
  border-color: ${colors.mainColor};

  justify-content: center;
`;

export const HidePasswordButton = styled.TouchableOpacity`
  margin-left: 12px;
  justify-content: center;
  align-items: center;
`;

export const HidePasswordText = styled.Text`
  font-family: 'Metropolis-Regular';
  font-size: 14px;
  color: ${colors.mainColor};
`;

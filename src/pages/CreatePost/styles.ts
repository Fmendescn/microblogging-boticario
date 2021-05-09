import styled from 'styled-components/native';

import colors from '../../shared/colors';

export const Container = styled.View`
  flex: 1;
  background: ${colors.white};
  padding: 22px;
`;

export const Header = styled.View`
  margin: 16px 0 32px 0;
`;

export const Content = styled.View`
  flex: 1;
`;

export const InputLongText = styled.TextInput`
  border-width: 0.5px;
  border-radius: 12px;
  border-color: ${colors.darkFont};
  height: 120px;
  padding: 12px;

  font-family: 'Metropolis-Regular';
  font-size: 14px;
  color: ${colors.black};
`;

import styled from 'styled-components/native';

import colors from '../../shared/colors';

export const Container = styled.View`
  flex: 1;
  background: #fff;

  justify-content: center;
  align-items: center;
`;

export const Tittle = styled.Text`
  font-family: 'AvenirLTStd-Black';
  font-size: 24px;
  color: ${colors.mainColor};
`;

export default Container;

import styled from 'styled-components/native';

import colors from './colors';

export const SectionTittle = styled.Text`
  font-family: 'Metropolis-SemiBold';
  font-size: 24px;
  margin-bottom: 6px;
  color: ${colors.darkFont};
`;

export const SectionDescription = styled.Text`
  font-family: 'Metropolis-Regular';
  font-size: 14px;
  color: ${colors.labelFont};
`;

export const InputLabel = styled.Text`
  font-family: 'Metropolis-Regular';
  font-size: 15px;
  color: ${colors.labelFont};
`;

export const RegularWhiteLarge = styled.Text`
  font-family: 'Metropolis-Regular';
  font-size: 18px;
  color: ${colors.white};
`;

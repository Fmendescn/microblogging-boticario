import styled from 'styled-components/native';

import colors from '../../shared/colors';

export const Container = styled.TouchableOpacity`
  height: 64px;
  margin-bottom: 14px;
  background: ${colors.mainColor};
  border-radius: 16px;

  justify-content: center;
  align-items: center;
`;

export default Container;

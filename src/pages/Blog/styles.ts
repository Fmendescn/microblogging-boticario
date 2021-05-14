import styled from 'styled-components/native';

import colors from '../../shared/colors';

export const Container = styled.View`
  flex: 1;
  background: ${colors.white};
`;

export const Header = styled.View`
  padding: 22px;
  margin-top: 16px;
`;

export const NewsList = styled.FlatList`
  padding: 8px;
`;

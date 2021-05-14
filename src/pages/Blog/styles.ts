import styled from 'styled-components/native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

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

export const CardLoading = styled(SkeletonPlaceholder)`
  /* margin: 4px 4px 14px 4px; */
  padding: 16px;

  /* height: 80px;
  width: 150px;
  background: #f0f0f0;
  border-radius: 12px; */
`;

// export const Loading = styled(SkeletonPlaceholder)``;

export const ViewLoading = styled.View`
  padding: 12px;
`;

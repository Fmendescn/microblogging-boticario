import styled from 'styled-components/native';

import colors from '../../shared/colors';
import { signOutIcon } from '../../shared/images';

export const Container = styled.View`
  flex: 1;
  background: ${colors.white};
`;

export const Header = styled.View`
  margin-top: 16px;
  padding: 22px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Messages = styled.View`
  flex: 1;
`;

export const GreetingMessage = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-family: 'AvenirLTStd-Book';
  font-size: 18px;
  color: ${colors.darkFont};
  margin-bottom: 8px;
`;

export const SignOutButton = styled.TouchableOpacity``;

export const SignOutIcon = styled.Image.attrs({
  source: signOutIcon,
  resizeMode: 'contain',
})`
  height: 30px;
  width: 30px;

  margin-left: 22px;
`;

export const PostsList = styled.FlatList`
  padding: 8px;
`;

import styled from 'styled-components/native';

import { logo } from '../../shared/images';
import colors from '../../shared/colors';

interface SwitchScreenButtonProps {
  isSelected: boolean;
}

export const Container = styled.View`
  flex: 1;
  background: ${colors.white};
`;

export const Header = styled.View`
  margin: 52px 0;
  align-items: center;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'contain',
})`
  height: 57px;
  width: 148px;
`;

export const TopTab = styled.View`
  flex: 1;
  background: ${colors.mainColor};
  border-top-left-radius: 28px;
  border-top-right-radius: 28px;
`;

export const SwitchScreen = styled.View`
  height: 72px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const Content = styled.View`
  flex: 1;
  background: ${colors.white};
  border-top-left-radius: 28px;
  border-top-right-radius: 28px;
`;

export const SwitchScreenButton = styled.TouchableOpacity<SwitchScreenButtonProps>`
  opacity: ${props => (props.isSelected ? 1 : 0.3)};
`;

import styled from 'styled-components/native';

import colors from '../../shared/colors';
import { clockIcon, logo } from '../../shared/images';

export const CardMessage = styled.View`
  margin: 0 4px 14px 4px;
  padding: 16px;
  border-radius: 12px;
  background: ${colors.white};
`;

export const ViewCard = styled.View`
  flex-direction: row;
`;

export const ViewInformation = styled.View`
  flex: 1;
`;

export const Author = styled.Text`
  font-family: 'Metropolis-SemiBold';
  font-size: 18px;
  color: ${colors.mainColor};
`;

export const Message = styled.Text`
  font-family: 'Metropolis-Regular';
  font-size: 14px;
  color: ${colors.black};
  line-height: 18px;
  margin: 4px 0;
`;

export const TimeView = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ClockIcon = styled.Image.attrs({
  source: clockIcon,
  resizeMode: 'contain',
})`
  height: 16px;
  width: 16px;
  margin-right: 8px;
`;

export const IntervalTime = styled.Text`
  font-family: 'AvenirLTStd-Book';
  font-size: 14px;
  color: ${colors.black};
  line-height: 18px;
  margin: 4px 0;
`;

export const CoverImage = styled.Image.attrs({
  reziseMode: 'contain',
  defaultSource: logo,
})`
  height: 141px;
  width: 92px;
  border-radius: 8px;
  margin-right: 12px;
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const PostActions = styled.View`
  flex-direction: row;
`;

export const ActionButton = styled.TouchableOpacity`
  margin-left: 14px;
  height: 30px;
  width: 30px;
  justify-content: center;
  align-items: center;
`;

export const IconAction = styled.Image.attrs({
  resizeMode: 'contain',
})`
  height: 24px;
  width: 24px;
`;

import styled from 'styled-components/native';

import colors from '../../../../shared/colors';
import { clockIcon } from '../../../../shared/images';

export const CardMessage = styled.View`
  padding: 16px;
  border-radius: 12px;
  background: #fff;
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

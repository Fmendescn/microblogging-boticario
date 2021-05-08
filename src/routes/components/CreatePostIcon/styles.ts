import styled from 'styled-components/native';

import { addIcon } from '../../../shared/images';
import colors from '../../../shared/colors';

export const Button = styled.View`
  height: 48px;
  width: 48px;
  border-radius: 24px;
  background: ${colors.mainColor};

  justify-content: center;
  align-items: center;
`;

export const Icon = styled.Image.attrs({
  source: addIcon,
  resizeMode: 'contain',
})`
  height: 20px;
  width: 20px;
`;

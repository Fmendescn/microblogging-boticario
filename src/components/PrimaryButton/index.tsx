import React from 'react';

import { RegularWhiteLarge } from '../../shared/texts';
import { Container } from './styles';

interface PrimaryButtonProps {
  label: string;
}

const PrimaryButton = ({ label }: PrimaryButtonProps): JSX.Element => (
  <Container>
    <RegularWhiteLarge>{label}</RegularWhiteLarge>
  </Container>
);

export default PrimaryButton;

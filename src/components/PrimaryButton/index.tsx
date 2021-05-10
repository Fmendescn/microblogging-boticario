/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ActivityIndicator, TouchableOpacityProps } from 'react-native';

import { RegularWhiteLarge } from '../../shared/texts';
import { Container, LoadingSpinner } from './styles';

interface PrimaryButtonProps extends TouchableOpacityProps {
  label: string;
  isLoading: boolean;
}

const PrimaryButton = ({
  label,
  isLoading,
  ...props
}: PrimaryButtonProps): JSX.Element => (
  <Container {...props} disabled={isLoading}>
    {isLoading ? (
      <LoadingSpinner />
    ) : (
      <RegularWhiteLarge>{label}</RegularWhiteLarge>
    )}
  </Container>
);

export default PrimaryButton;

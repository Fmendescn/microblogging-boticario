/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { TextInputProps as NativeTextInputProps } from 'react-native';

import { InputLabel } from '../../shared/texts';
import {
  Container,
  Input,
  ViewInput,
  HidePasswordButton,
  HidePasswordText,
} from './styles';

interface InputTextProps extends NativeTextInputProps {
  label: string;
  isInputPassword?: boolean;
  handleHidePasswordChange?: (value: boolean) => void;
}

const InputText = ({
  label,
  isInputPassword,
  handleHidePasswordChange,
  ...props
}: InputTextProps): JSX.Element => (
  <Container>
    <InputLabel>{label}</InputLabel>
    <ViewInput>
      <Input {...props} />
      {isInputPassword && (
        <HidePasswordButton
          onPress={() =>
            handleHidePasswordChange &&
            handleHidePasswordChange(!props?.secureTextEntry)
          }
        >
          <HidePasswordText>
            {props?.secureTextEntry ? 'Mostrar' : 'Esconder'}
          </HidePasswordText>
        </HidePasswordButton>
      )}
    </ViewInput>
  </Container>
);

InputText.defaultProps = {
  isInputPassword: false,
  handleHidePasswordChange: () => undefined,
};

export default InputText;

import React, { useState, useCallback } from 'react';

import InputText from '../../../../components/InputText';
import PrimaryButton from '../../../../components/PrimaryButton';

import { SectionDescription, SectionTittle } from '../../../../shared/texts';
import { Container, Header, Form, Footer } from './styles';

const SignUp = (): JSX.Element => {
  const [hidePassword, setHidePassword] = useState<boolean>(true);
  const handleHidePasswordChange = useCallback((value: boolean) => {
    setHidePassword(value);
  }, []);

  return (
    <Container>
      <Header>
        <SectionTittle>Faça seu cadastro</SectionTittle>
        <SectionDescription>Leva menos de 1 minuto</SectionDescription>
      </Header>
      <Form>
        <InputText autoCorrect={false} label="Nome" />
        <InputText autoCapitalize="none" autoCorrect={false} label="Email" />
        <InputText
          isInputPassword
          handleHidePasswordChange={handleHidePasswordChange}
          secureTextEntry={hidePassword}
          autoCapitalize="none"
          autoCorrect={false}
          label="Senha"
        />
      </Form>
      <Footer>
        <PrimaryButton isLoading={false} label="LOGAR" />
      </Footer>
    </Container>
  );
};

export default SignUp;

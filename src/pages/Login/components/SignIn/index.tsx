import React, { useCallback, useState } from 'react';

import InputText from '../../../../components/InputText';
import PrimaryButton from '../../../../components/PrimaryButton';

import { SectionTittle, SectionDescription } from '../../../../shared/texts';
import { Container, Header, Form, Footer } from './styles';

const SignIn = (): JSX.Element => {
  const [hidePassword, setHidePassword] = useState<boolean>(true);

  const handleHidePasswordChange = useCallback((value: boolean) => {
    setHidePassword(value);
  }, []);

  return (
    <Container>
      <Header>
        <SectionTittle>Bem vindo</SectionTittle>
        <SectionDescription>
          Logue com sua conta para ter acesso
        </SectionDescription>
      </Header>
      <Form>
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
        <PrimaryButton label="LOGAR" />
      </Footer>
    </Container>
  );
};

export default SignIn;

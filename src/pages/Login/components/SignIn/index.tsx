import React, { useCallback, useState } from 'react';

import InputText from '../../../../components/InputText';
import PrimaryButton from '../../../../components/PrimaryButton';

import { useAuth } from '../../../../hooks/context/Auth';

import { SectionTittle, SectionDescription } from '../../../../shared/texts';
import { Container, Header, Form, Footer } from './styles';

const SignIn = (): JSX.Element => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [hidePassword, setHidePassword] = useState<boolean>(true);

  const { signIn, signInLoading } = useAuth();

  const handleHidePasswordChange = useCallback((value: boolean) => {
    setHidePassword(value);
  }, []);

  const handleLogin = useCallback(() => {
    signIn({ email, password });
  }, [signIn, email, password]);

  return (
    <Container>
      <Header>
        <SectionTittle>Bem vindo</SectionTittle>
        <SectionDescription>
          Logue com sua conta para ter acesso
        </SectionDescription>
      </Header>
      <Form>
        <InputText
          onChangeText={text => setEmail(text)}
          autoCapitalize="none"
          autoCorrect={false}
          label="Email"
        />
        <InputText
          onChangeText={text => setPassword(text)}
          isInputPassword
          handleHidePasswordChange={handleHidePasswordChange}
          secureTextEntry={hidePassword}
          autoCapitalize="none"
          autoCorrect={false}
          label="Senha"
        />
      </Form>
      <Footer>
        <PrimaryButton
          isLoading={signInLoading}
          onPress={handleLogin}
          label="LOGAR"
        />
      </Footer>
    </Container>
  );
};

export default SignIn;

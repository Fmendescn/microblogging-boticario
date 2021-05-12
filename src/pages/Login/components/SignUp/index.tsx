import React, { useState, useCallback } from 'react';

import InputText from '../../../../components/InputText';
import PrimaryButton from '../../../../components/PrimaryButton';

import useAuth from '../../../../hooks/useAuth';

import { SectionDescription, SectionTittle } from '../../../../shared/texts';
import { Container, Header, Form, Footer } from './styles';

const SignUp = (): JSX.Element => {
  const { signUp, isLoading } = useAuth();
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [hidePassword, setHidePassword] = useState<boolean>(true);

  const handleHidePasswordChange = useCallback((value: boolean) => {
    setHidePassword(value);
  }, []);

  const handleRegister = useCallback(() => {
    signUp({ name, email, password });
  }, [name, email, password, signUp]);

  return (
    <Container>
      <Header>
        <SectionTittle>Faça seu cadastro</SectionTittle>
        <SectionDescription>Leva menos de 1 minuto</SectionDescription>
      </Header>
      <Form>
        <InputText
          onChangeText={text => setName(text)}
          autoCorrect={false}
          label="Nome"
        />
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
          onPress={handleRegister}
          isLoading={isLoading}
          label="CADASTRAR"
        />
      </Footer>
    </Container>
  );
};

export default SignUp;

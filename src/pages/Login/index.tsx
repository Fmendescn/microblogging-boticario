import React from 'react';

import SignIn from './components/SignIn';
// import SignUp from './components/SignUp';

import { RegularWhiteLarge } from '../../shared/texts';
import {
  Container,
  Header,
  Logo,
  TopTab,
  SwitchScreen,
  Content,
} from './styles';

const Login = (): JSX.Element => (
  <Container>
    <Header>
      <Logo />
    </Header>
    <TopTab>
      <SwitchScreen>
        <RegularWhiteLarge>LOGIN</RegularWhiteLarge>
        <RegularWhiteLarge>SIGN UP</RegularWhiteLarge>
      </SwitchScreen>
      <Content>
        <SignIn />
      </Content>
    </TopTab>
  </Container>
);

export default Login;

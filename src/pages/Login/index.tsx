import React, { useEffect, useState } from 'react';

import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

import useAuth from '../../hooks/useAuth';

import { RegularWhiteLarge } from '../../shared/texts';
import {
  Container,
  Header,
  Logo,
  TopTab,
  SwitchScreen,
  Content,
  SwitchScreenButton,
} from './styles';

const SCREENS = ['SignIn', 'SignUp'] as const;
type SCREENS_TYPE = typeof SCREENS[number];

const Login = (): JSX.Element => {
  const [selectedScreen, setSelectedScreen] = useState<SCREENS_TYPE>('SignIn');
  const { userIsRegistered } = useAuth();

  useEffect(() => {
    if (userIsRegistered) {
      setSelectedScreen('SignIn');
    }
  }, [userIsRegistered]);

  return (
    <Container>
      <Header>
        <Logo />
      </Header>
      <TopTab>
        <SwitchScreen>
          <SwitchScreenButton
            onPress={() => setSelectedScreen('SignIn')}
            isSelected={selectedScreen === 'SignIn'}
          >
            <RegularWhiteLarge>LOGIN</RegularWhiteLarge>
          </SwitchScreenButton>
          <SwitchScreenButton
            onPress={() => setSelectedScreen('SignUp')}
            isSelected={selectedScreen === 'SignUp'}
          >
            <RegularWhiteLarge>SIGN UP</RegularWhiteLarge>
          </SwitchScreenButton>
        </SwitchScreen>
        <Content>
          {selectedScreen === 'SignIn' ? <SignIn /> : <SignUp />}
        </Content>
      </TopTab>
    </Container>
  );
};

export default Login;

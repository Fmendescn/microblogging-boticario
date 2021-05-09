import React from 'react';

import { SectionTittle } from '../../shared/texts';
import {
  Container,
  Header,
  Messages,
  GreetingMessage,
  SignOutButton,
  SignOutIcon,
} from './styles';

const Feed = (): JSX.Element => {
  return (
    <Container>
      <Header>
        <Messages>
          <GreetingMessage>Olá, Francisco!</GreetingMessage>
          <SectionTittle>Últimas mensagens</SectionTittle>
        </Messages>
        <SignOutButton>
          <SignOutIcon />
        </SignOutButton>
      </Header>
    </Container>
  );
};

export default Feed;

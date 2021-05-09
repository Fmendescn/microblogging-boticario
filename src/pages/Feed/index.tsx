import React from 'react';

import PostCard from '../../components/PostCard';

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
      <PostCard
        author="Pedro Henrique"
        date="1 hrs atrás"
        message="E ai rapaziada, to chegando com os refri"
      />
    </Container>
  );
};

export default Feed;

import React from 'react';

import PostCard from '../../components/PostCard';

import { useAuth } from '../../hooks/context/Auth';

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
  const { signOut } = useAuth();

  return (
    <Container>
      <Header>
        <Messages>
          <GreetingMessage>Olá, Francisco!</GreetingMessage>
          <SectionTittle>Últimas mensagens</SectionTittle>
        </Messages>
        <SignOutButton onPress={() => signOut()}>
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

import React, { useCallback } from 'react';

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
  PostsList,
} from './styles';

interface IPosts {
  author: string;
  content: string;
  date: string;
}

const posts: IPosts[] = [
  {
    author: 'Marina Lopes',
    content: 'Bom dia pessoal, como é q vcs tão?',
    date: '2021-04-05T14:48:00.000Z',
  },
  {
    author: 'Bruno Silva',
    content: 'Animado com a v0.64 do React Native, Hermes agora para iOS',
    date: '2021-05-04T14:48:00.000Z',
  },
  {
    author: 'Helena Cruz',
    content: 'Bom dia pessoal, como é q vcs tão?',
    date: '2021-05-05T14:48:00.000Z',
  },
  {
    author: 'Fernanda Kelly',
    content: 'Bom dia pessoal, como é q vcs tão?',
    date: '2021-04-29T14:48:00.000Z',
  },
  {
    author: 'Marina Lopes',
    content: 'Bom dia pessoal, como é q vcs tão?',
    date: '2021-04-05T14:48:00.000Z',
  },
  {
    author: 'Bruno Silva',
    content: 'Animado com a v0.64 do React Native, Hermes agora para iOS',
    date: '2021-05-04T14:48:00.000Z',
  },
  {
    author: 'Helena Cruz',
    content: 'Bom dia pessoal, como é q vcs tão?',
    date: '2021-05-05T14:48:00.000Z',
  },
  {
    author: 'Fernanda Kelly',
    content: 'Bom dia pessoal, como é q vcs tão?',
    date: '2021-04-29T14:48:00.000Z',
  },
];

const Feed = (): JSX.Element => {
  const { signOut } = useAuth();

  const renderItem = useCallback(
    ({ item, index }) => (
      <PostCard
        key={index}
        author={item?.author}
        date={item?.date}
        message={item?.content}
      />
    ),
    [],
  );

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
      <PostsList
        data={posts}
        keyExtractor={(item: any, index: number) => item.date + index}
        renderItem={renderItem}
      />
    </Container>
  );
};

export default Feed;

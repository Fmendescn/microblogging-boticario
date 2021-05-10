/* eslint-disable camelcase */
import React, { useCallback } from 'react';
import PostCard from '../../components/PostCard';

import useAuth from '../../hooks/useAuth';

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

interface IUser {
  name: string;
  profile_picture?: string;
}

interface IMessage {
  content: string;
  created_at: string;
}

interface INews {
  user: IUser;
  message: IMessage;
}

const posts: INews[] = [
  {
    user: {
      name: 'Marina Lopes',
    },
    message: {
      content: 'Bom dia pessoal, como é q vcs tão?',
      created_at: '2021-04-05T14:48:00.000Z',
    },
  },
  {
    user: {
      name: 'Bruno Silva',
    },
    message: {
      content: 'Animado com a v0.64 do React Native, Hermes agora para iOS',
      created_at: '2021-05-04T14:48:00.000Z',
    },
  },
  {
    user: {
      name: 'Helena Cruz',
    },
    message: {
      content: 'Bom dia pessoal, como é q vcs tão?',
      created_at: '2021-05-05T14:48:00.000Z',
    },
  },
  {
    user: {
      name: 'Fernanda Kelly',
    },
    message: {
      content: 'Bom dia pessoal, como é q vcs tão?',
      created_at: '2021-04-29T14:48:00.000Z',
    },
  },
  {
    user: {
      name: 'Marina Lopes',
    },
    message: {
      content: 'Bom dia pessoal, como é q vcs tão?',
      created_at: '2021-04-05T14:48:00.000Z',
    },
  },
  {
    user: {
      name: 'Bruno Silva',
    },
    message: {
      content: 'Animado com a v0.64 do React Native, Hermes agora para iOS',
      created_at: '2021-05-04T14:48:00.000Z',
    },
  },
  {
    user: {
      name: 'Helena Cruz',
    },
    message: {
      content: 'Bom dia pessoal, como é q vcs tão?',
      created_at: '2021-05-05T14:48:00.000Z',
    },
  },
  {
    user: {
      name: 'Fernanda Kelly',
    },
    message: {
      content: 'Bom dia pessoal, como é q vcs tão?',
      created_at: '2021-04-29T14:48:00.000Z',
    },
  },
];

const Feed = (): JSX.Element => {
  const { signOut } = useAuth();

  const renderItem = useCallback(
    ({ item, index }) => (
      <PostCard
        key={index}
        author={item?.user?.name}
        date={item?.message?.created_at}
        message={item?.message?.content}
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
        keyExtractor={(item: any, index: number) =>
          item?.message?.created_at + index
        }
        renderItem={renderItem}
      />
    </Container>
  );
};

export default Feed;

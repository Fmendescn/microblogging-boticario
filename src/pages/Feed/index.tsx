/* eslint-disable no-underscore-dangle */
/* eslint-disable camelcase */
import React, { useCallback } from 'react';
import PostCard from '../../components/PostCard';

import useAuth from '../../hooks/useAuth';
import usePosts from '../../hooks/usePosts';

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

const Feed = (): JSX.Element => {
  const { signOut, userStored } = useAuth();
  const { listPosts, readPost, deletePost } = usePosts();

  const renderItem = useCallback(
    ({ item, index }) => (
      <PostCard
        key={index}
        author={item?.user?.name}
        date={item?.message?.created_at}
        message={item?.message?.content}
        id={item?.user?._id}
        deletePost={() => deletePost(index)}
        readPost={() => readPost(index)}
      />
    ),
    [deletePost, readPost],
  );

  return (
    <Container>
      <Header>
        <Messages>
          <GreetingMessage>Olá{`, ${userStored}`}!</GreetingMessage>
          <SectionTittle>Suas últimas mensagens</SectionTittle>
        </Messages>
        <SignOutButton onPress={() => signOut()}>
          <SignOutIcon />
        </SignOutButton>
      </Header>
      <PostsList
        data={listPosts}
        keyExtractor={(item: any, index: number) =>
          item?.message?.created_at + index
        }
        renderItem={renderItem}
      />
    </Container>
  );
};

export default Feed;

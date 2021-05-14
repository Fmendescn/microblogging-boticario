import React, { useCallback } from 'react';

import PostCard from '../../components/PostCard';

import { SectionTittle } from '../../shared/texts';
import {
  Container,
  Header,
  NewsList,
  CardLoading,
  ViewLoading,
} from './styles';

import useBlog from '../../hooks/useBlog';

const Blog = (): JSX.Element => {
  const { newsList, isLoading } = useBlog();

  const renderItem = useCallback(
    ({ item, index }) => (
      <PostCard
        key={index}
        author={item?.user?.name}
        date={item?.message?.created_at}
        message={item?.message?.content}
        coverImage={item?.user?.profile_picture}
      />
    ),
    [],
  );

  return (
    <Container>
      <Header>
        <SectionTittle>Últimas novidades</SectionTittle>
      </Header>
      {isLoading ? (
        <ViewLoading>
          <CardLoading>
            <CardLoading.Item
              width="100%"
              height={120}
              borderRadius={12}
              marginBottom={8}
            />
            <CardLoading.Item
              width="100%"
              height={120}
              borderRadius={12}
              marginBottom={8}
            />
            <CardLoading.Item
              width="100%"
              height={120}
              borderRadius={12}
              marginBottom={8}
            />
            <CardLoading.Item
              width="100%"
              height={120}
              borderRadius={12}
              marginBottom={8}
            />
            <CardLoading.Item
              width="100%"
              height={120}
              borderRadius={12}
              marginBottom={8}
            />
          </CardLoading>
        </ViewLoading>
      ) : (
        <NewsList
          data={newsList}
          keyExtractor={(item: any, index: number) =>
            item?.message?.created_at + index
          }
          renderItem={renderItem}
        />
      )}
    </Container>
  );
};

export default Blog;

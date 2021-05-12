/* eslint-disable no-unused-expressions */
import React, { useCallback, useState, useEffect } from 'react';

import usePosts from '../../hooks/usePosts';

import PrimaryButton from '../../components/PrimaryButton';

import { SectionTittle, SectionDescription } from '../../shared/texts';
import { Container, Header, Content, InputLongText } from './styles';

const MAX_CHARACTERS_NUMBER = 280;

const CreatePost = (): JSX.Element => {
  const { publicate, postReaded, editPost } = usePosts();
  const [textMessage, setTextMessage] = useState<string>('');

  const handlePublicatePost = useCallback(() => {
    setTextMessage('');
    postReaded ? editPost(textMessage) : publicate(textMessage);
  }, [publicate, textMessage, editPost, postReaded]);

  useEffect(() => {
    if (postReaded?.message?.content) {
      setTextMessage(postReaded?.message?.content);
    }
  }, [postReaded?.message?.content]);

  return (
    <Container>
      <Header>
        <SectionTittle>Novo Post</SectionTittle>
        <SectionDescription>
          E ai, conta pra gente o que está pensando
        </SectionDescription>
      </Header>
      <Content>
        <InputLongText
          value={textMessage}
          onChangeText={text => setTextMessage(text)}
          multiline
          maxLength={MAX_CHARACTERS_NUMBER}
        />
      </Content>
      <PrimaryButton
        onPress={handlePublicatePost}
        isLoading={false}
        label={postReaded ? 'ATUALIZAR' : 'PUBLICAR'}
      />
    </Container>
  );
};

export default CreatePost;

import React, { useCallback, useState } from 'react';

import usePosts from '../../hooks/usePosts';

import PrimaryButton from '../../components/PrimaryButton';

import { SectionTittle, SectionDescription } from '../../shared/texts';
import { Container, Header, Content, InputLongText } from './styles';

const MAX_CHARACTERS_NUMBER = 280;

const CreatePost = (): JSX.Element => {
  const [textMessage, setTextMessage] = useState<string>('');

  const { publicate } = usePosts();

  const handlePublicatePost = useCallback(() => {
    publicate(textMessage);
  }, [publicate, textMessage]);

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
          onChangeText={text => setTextMessage(text)}
          multiline
          maxLength={MAX_CHARACTERS_NUMBER}
        />
      </Content>
      <PrimaryButton
        onPress={handlePublicatePost}
        isLoading={false}
        label="PUBLICAR"
      />
    </Container>
  );
};

export default CreatePost;

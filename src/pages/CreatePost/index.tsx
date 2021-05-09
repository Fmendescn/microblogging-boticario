import React from 'react';

import PrimaryButton from '../../components/PrimaryButton';

import { SectionTittle, SectionDescription } from '../../shared/texts';
import { Container, Header, Content, InputLongText } from './styles';

const MAX_CHARACTERS_NUMBER = 140;

const CreatePost = (): JSX.Element => (
  <Container>
    <Header>
      <SectionTittle>Novo Post</SectionTittle>
      <SectionDescription>
        E ai, conta pra gente o que está pensando
      </SectionDescription>
    </Header>
    <Content>
      <InputLongText multiline maxLength={MAX_CHARACTERS_NUMBER} />
    </Content>
    <PrimaryButton label="PUBLICAR" />
  </Container>
);

export default CreatePost;

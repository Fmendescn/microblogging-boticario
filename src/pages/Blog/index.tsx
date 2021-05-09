import React from 'react';

import PostCard from '../../components/PostCard';
import { SectionTittle } from '../../shared/texts';
import { Container, Header } from './styles';

const Blog = (): JSX.Element => (
  <Container>
    <Header>
      <SectionTittle>Últimas novidades</SectionTittle>
    </Header>
    <PostCard
      author="O boticario"
      message="Além disso, nossos funcionários e familiares receberão kits de proteção. Afinal, o cuidado começa aqui dentro, né?"
      date="2 dias atrás"
      coverImage="https://images.unsplash.com/photo-1603993097397-89c963e325c7?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    />
  </Container>
);

export default Blog;

import React from 'react';
import Blog from '@containers/Blog';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  max-width: 900px;
  margin: auto;
  position: relative;
  align-items: stretch;
  flex-direction: column;
  min-height: 100vh;
`;

const BlogPage: React.FC<{}> = () => {
  return (
    <Container>
      <Blog />
    </Container>
  );
};

export default BlogPage;

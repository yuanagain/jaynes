import React from 'react';
import Head from 'next/head';
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
    <div>
      <Head>
        <title>{'Jaynes for Days'}</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        />
      </Head>
      <Container>
        <Blog />
      </Container>
    </div>
  );
};

export default BlogPage;

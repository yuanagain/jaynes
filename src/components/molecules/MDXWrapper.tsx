import React from 'react';
import styled from '@emotion/styled';
import Head from 'next/head';
        
type WrapperProps = {
  [name: string]: any;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  min-height: 100vh;
  padding: 15px;
  max-width: 900px;
  margin: auto;
  position: relative;
  min-height: 100vh;
`;

export const Wrapper = (props: WrapperProps) => {
  return (
    <Container>
      <Head>
        <title>{'Jaynes for Days'}</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        />
      </Head>
      <main {...props} />
    </Container>
  );
};

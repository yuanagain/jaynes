import React from 'react';
import styled from '@emotion/styled';

function Home() {
  return (
    <Container>
      <DetailsContainer>
        <br/>
        <br/>
        <CompactTitle 
          style={{marginBottom: 0}}>
          Welcome
        </CompactTitle>
        <br/>
      </DetailsContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  padding: 40px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  flex: 1;
`;

const CompactTitle = styled.h1`
  margin-top: 0px;
  margin-bottom: 0px;
`

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 15px;
  padding-right: 15px;
  max-width: 500px;
  margin: 40px auto;
  flex: 1;
`;

export default Home;

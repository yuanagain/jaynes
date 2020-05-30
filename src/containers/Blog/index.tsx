import React from 'react';
import styled from '@emotion/styled';

const TitleText = styled.h1`
  margin-top: 40px;
`;

const Blog: React.FC<{}> = () => {
  return (
    <BlogContainer>
      <ContentContainer>
        <TitleText>Blog</TitleText>
        <br/>
        <p>
          Table of Contents coming soon!
        </p>
      </ContentContainer>
    </BlogContainer>
  );
};

const BlogContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex: 1;
`;

const ContentContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-top: 40px;
  padding-left: 10px;
  padding-right: 10px;
`;

export default Blog;

import React from 'react';
import styled from '@emotion/styled';

const TitleText = styled.h1`
  margin-top: 40px;
`;

type BlogProps = {
  blogId: number | string;
};

const Blog: React.FC<BlogProps> = ({ blogId }: BlogProps) => {
  return (
    <PostContainer>
      <ContentContainer>
        <TitleText>Post {blogId}</TitleText>
      </ContentContainer>
    </PostContainer>
  );
};

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 400px;
  min-height: 100%;
  align-items: stretch;
  flex: 1;
`;

const ContentContainer = styled.div`
  display: flex;
  flex: 1;
`;

export default Blog;

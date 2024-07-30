import React from "react";
import styled from "styled-components";

const PostDetailContent = ({ content }) => {
  return (
    <ContentContainer>
      {content.map((item, index) => (
        <React.Fragment key={index}>
          {item.type === "text" && <Description>{item.value}</Description>}
          {item.type === "image" && (
            <PostImage src={item.value} alt={`Post image ${index}`} />
          )}
        </React.Fragment>
      ))}
    </ContentContainer>
  );
};

export default PostDetailContent;

const ContentContainer = styled.div`
  padding: 8px 20px;
`;

const PostImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 10px;
`;

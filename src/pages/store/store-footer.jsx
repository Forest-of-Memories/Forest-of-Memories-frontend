import React from "react";
import styled from "styled-components";

const StoreFooter = () => {
  return (
    <FooterWrapper>
      <FooterIcon>📋</FooterIcon>
      <FooterIcon>🖼️</FooterIcon>
      <FooterIcon>🏠</FooterIcon>
      <FooterIcon>🛒</FooterIcon>
      <FooterIcon>👤</FooterIcon>
    </FooterWrapper>
  );
};

export default StoreFooter;

const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  background-color: white;
  border-top: 1px solid #ccc;
`;

const FooterIcon = styled.div`
  font-size: 24px;
  color: #333;
`;

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  margin-top: 10px;
  justify-content: center;
`;

export const Post = styled.div`
  margin: 0px 10px 0px 10px;
`;

export const GliderSection = styled.div`
  width: calc(100% - 40px);
  max-width: 1080px;
  margin: 30px;
`;

export const BlockQuote = styled.blockquote`
  display: block;
  background: #fff;
  border: 0;
  border-radius: 3px;
  box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.5), 0 1px 10px 0 rgba(0, 0, 0, 0.15);
  margin: 1px;
  max-width: 540px;
  min-width: 326px;
  padding: 0;
  width: calc(100% - 2px);
`;

export const InstaLink = styled.a`
  background: #ffffff;
  line-height: 0;
  padding: 0 0;
  text-align: center;
  text-decoration: none;
  width: 100%;
`;

export const IntagramPostRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const InstagramPostDivider = styled.div`
  padding: 19% 0;
`;

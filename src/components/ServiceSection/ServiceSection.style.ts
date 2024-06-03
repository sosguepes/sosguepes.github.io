import ServiceItem from "components/ServiceItem";
import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0px 32px;
  max-width: 1080px;
  margin: auto;
`;

export const StyledServiceItem = styled(ServiceItem)`
  display: flex;
  text-align: left;
  align-items: center;
  gap: 32px;
  img {
    display: flex;
    flex-shrink: 0;
    width: 40px;
    height: 40px;
  }
  p {
    display: flex;
    width: calc(100% - 40px);
  }
`;

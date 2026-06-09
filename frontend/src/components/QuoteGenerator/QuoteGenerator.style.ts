import { darkPrimaryColor, primaryColor } from "style";
import { styled } from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 22px;

  @media screen and (min-width: 700px) {
    margin-bottom: 0px;
  }
`;

export const StyledInput = styled.input`
  appearance: none;
  -webkit-appearance: none;

  /* Create the custom circle container */
  width: 20px;
  height: 20px;
  border: 2px solid #555;
  border-radius: 50%;
  outline: none;
  cursor: pointer;

  /* Align horizontally with text labels */
  vertical-align: middle;

  /* Flex centering setup for the inner checkmark */
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:checked {
    background: ${primaryColor};
    border-color: ${darkPrimaryColor};
  }
`;

export const StyledLabel = styled.label`
  margin-left: 2px;
`;

export const QuoteCriteriaTitle = styled.p`
  font-weight: bold;
  margin-bottom: 8px;
  margin-top: 16px;
  font-size: 22px;
`;

export const PriceEstimationBox = styled.div`
  background-color: ${primaryColor};
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);

  @media screen and (min-width: 700px) {
    position: sticky;
    top: 20px;
    width: 350px;
    right: 20px;
    height: fit-content;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  margin-top: 30px;
  padding: 40px;
  max-width: 840px;
  margin: auto;
  flex-direction: column;

  @media screen and (min-width: 700px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
export const PriceEstimationDescription = styled.p`
  margin-top: 3px;
`;

export const PriceEstimation = styled.p`
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: 22px;
`;

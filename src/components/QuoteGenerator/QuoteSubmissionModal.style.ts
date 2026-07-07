import { concrete, primaryColor } from "style";
import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
  display: flex;
  justify-content: center;
`;

export const FormWrapper = styled.div`
  border-radius: 10px;
  flex-direction: column;
  display: flex;
  background-color: white;
  margin: 25px 25px;
  max-width: 800px;
  padding: 25px 25px;
  height: fit-content;
`;

export const FormContainer = styled.div``;

export const Title = styled.h2`
  font-size: 24px;
`;

export const StyledInput = styled.input`
  margin-bottom: 10px;
  width: 100%;
  border-radius: 3px;
  outline: none;
  border: 2px solid ${concrete};
  height: 35px;
  font-size: 18px;

  &:focus {
    border: 2px solid ${primaryColor};
  }
`;

export const FormInput = styled.div``;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

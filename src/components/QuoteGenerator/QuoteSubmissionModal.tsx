import React, { useState } from "react";
import {
  ButtonContainer,
  FormInput,
  ModalContainer,
  StyledInput,
  Title,
} from "./QuoteSubmissionModal.style";
import { CriteriaOption } from "./interfaces";
import { SubmitButtom } from "components/ui/Button";
import { FormWrapper } from "./QuoteSubmissionModal.style";

interface PropsType {
  closeModal: () => void;
  estimatedPriceRange: string;
  quoteData: {
    [criteria: string]: CriteriaOption | undefined;
  };
}

export const QuoteSubmissionModal = ({
  closeModal,
  quoteData,
  estimatedPriceRange,
}: PropsType) => {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<string | undefined>(undefined);
  const [customerName, setCustomerName] = useState<string | undefined>(
    undefined,
  );
  const [phoneNumber, setPhoneNumber] = useState<string | undefined>();

  const onClickSubmit = async () => {
    console.log("hello");
    setIsLoading(true);
    const response = await fetch("https://api.sosguepes74.fr", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        formData: quoteData,
        priceRange: estimatedPriceRange,
        phoneNumber: phoneNumber,
        name: customerName,
      }),
    });
    if (response.status == 201) {
      setResponse(
        "Merci pour ces informations! Nous vous contacterons dès que possible.",
      );
    } else {
      setResponse("Une erreur s'est produite. Veillez réessayer plus tard.");
    }
    setIsLoading(false);
  };

  return (
    <ModalContainer onClick={closeModal}>
      <FormWrapper onClick={(event) => event.stopPropagation()}>
        <Title>
          Laissez-nous vos coordonnées, on vous rappelle au plus vite!
        </Title>
        <form>
          <FormInput>
            <label>
              Nom et prénom
              <br />
              <StyledInput
                type="text"
                id="customer-name"
                value={customerName}
                autoComplete="name"
                onChange={(event) => setCustomerName(event.target.value)}
              />
            </label>
          </FormInput>
          <FormInput>
            <label>
              Numéro de téléphone
              <br />
              <StyledInput
                type="tel"
                name="phoneNumber"
                value={phoneNumber}
                autoComplete="tel"
                onChange={(event) =>
                  setPhoneNumber(event.target.value.replace(/[^0-9+*\s]/g, ""))
                }
              />
            </label>
          </FormInput>
          <ButtonContainer>
            <SubmitButtom
              disabled={
                !phoneNumber || !customerName || !!isLoading || !!response
              }
              onClick={onClickSubmit}
            >
              {isLoading ? "Envoi..." : "Envoyer"}
            </SubmitButtom>
            <SubmitButtom onClick={closeModal} transparent>
              Fermer
            </SubmitButtom>
          </ButtonContainer>
          {response && <div>{response}</div>}
        </form>
      </FormWrapper>
    </ModalContainer>
  );
};

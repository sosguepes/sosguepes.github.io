import React, { useState } from "react";
import {
  FormContainer,
  PriceEstimation,
  PriceEstimationBox,
  PriceEstimationDescription,
  QuoteCriteriaTitle,
  StyledInput,
  StyledLabel,
  Wrapper,
} from "./QuoteGenerator.style";
import { useWindowDimensions } from "hooks/useWindowDimensions";

interface CriteriaOption {
  label: string;
  priceIndicator: number; // indicates how much this option affects the price
}

interface QuoteGeneratorCriteriaProps {
  title: string;
  options: CriteriaOption[];
  onSelectedOption: (option: CriteriaOption | undefined) => void;
}

const QuoteGeneratorCriteria = (props: QuoteGeneratorCriteriaProps) => {
  const [selectedValue, setSelectedValue] = useState<
    CriteriaOption | undefined
  >(undefined);
  const { title, options, onSelectedOption } = props;

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const selectedOption = options.find(
        (option) => option.label === event.target.value,
      );
      setSelectedValue(selectedOption);
      onSelectedOption(selectedOption);
    } else {
      setSelectedValue(undefined);
      onSelectedOption(undefined);
    }
  };

  return (
    <form>
      <QuoteCriteriaTitle>{title}</QuoteCriteriaTitle>
      {options.map((option, index) => (
        <div key={index}>
          <StyledInput
            type="checkbox"
            id={`${option.label}`}
            name="fruit"
            value={option.label}
            checked={selectedValue?.label === option.label}
            onChange={handleOptionChange}
          />
          <StyledLabel htmlFor={option.label}>{option.label}</StyledLabel>
          <br />
        </div>
      ))}
    </form>
  );
};

export const QuoteGenerator: React.FC = () => {
  const form = {
    criteria: {
      interventionType: {
        label: "Type d'intervention",
        options: [
          { label: "Nid de guêpes", priceIndicator: 1 },
          { label: "Nid de frelons européens", priceIndicator: 1 },
          { label: "Nid de frelons asiatiques", priceIndicator: 2 },
          { label: "Autre", priceIndicator: 1 },
        ],
      },
      visibilityOnHive: {
        label: "Pouvez-vous voir le nid ?",
        options: [
          { label: "Oui", priceIndicator: 1 },
          { label: "Non", priceIndicator: 3 },
          { label: "Je ne sais pas", priceIndicator: 2 },
        ],
      },
      hiveLocation: {
        label: "Où se trouve le nid ?",
        options: [
          { label: "Sur le toit", priceIndicator: 0 },
          { label: "Sous le toit", priceIndicator: 0 },
          { label: "Plein pied", priceIndicator: 0 },
          { label: "Autre", priceIndicator: 0 },
        ],
      },
      hiveHeight: {
        label: "Hauteur du nid",
        options: [
          { label: "Hauteur d'homme", priceIndicator: 1 },
          { label: "Entre 2 et 5 mètres", priceIndicator: 2 },
          { label: "Plus de 5 mètres", priceIndicator: 3 },
        ],
      },
      accessibility: {
        label: "Est-il facile d'accès ?",
        options: [
          { label: "Oui", priceIndicator: 1 },
          { label: "Non", priceIndicator: 2 },
          { label: "Je ne sais pas", priceIndicator: 2 },
        ],
      },
      urgency: {
        label: "Y a-t-il une urgence ?",
        options: [
          { label: "Oui", priceIndicator: 2 },
          { label: "Non", priceIndicator: 1 },
        ],
      },
      dangerLevel: {
        label: "Presente-t-il un danger ?",
        options: [
          { label: "Oui", priceIndicator: 0 },
          { label: "Non", priceIndicator: 0 },
          { label: "Je ne sais pas", priceIndicator: 0 },
        ],
      },
    },
    priceRanges: [
      {
        label: "environ 100€",
        minSumPriceIndicator: 0,
        maxSumPriceIndicator: 7,
      },
      {
        label: "environ 120€",
        minSumPriceIndicator: 8,
        maxSumPriceIndicator: 10,
      },
      {
        label: "entre 150€ et 200€",
        minSumPriceIndicator: 11,
        maxSumPriceIndicator: null,
      },
    ],
  };

  const { width } = useWindowDimensions();
  const [allSelectedOptions, setAllSelectedOptions] = useState<{
    [key: string]: CriteriaOption | undefined;
  }>(
    Object.keys(form.criteria).reduce(
      (acc, key) => ({ ...acc, [key]: undefined }),
      {},
    ),
  );

  const handleSelectedOption = (
    criteriaKey: string,
    option: CriteriaOption | undefined,
  ) => {
    setAllSelectedOptions({ ...allSelectedOptions, [criteriaKey]: option });
  };

  const calculatePriceEstimation = () => {
    if (
      Object.values(allSelectedOptions).some((option) => option === undefined)
    ) {
      return "N/A";
    }
    const sumPriceIndicator = Object.values(allSelectedOptions).reduce(
      (sum, option) => sum + (option?.priceIndicator || 0),
      0,
    );
    const priceRange = form.priceRanges.find(
      (range) =>
        sumPriceIndicator >= range.minSumPriceIndicator &&
        (range.maxSumPriceIndicator === null ||
          sumPriceIndicator <= range.maxSumPriceIndicator),
    );
    return priceRange ? priceRange.label : "N/A";
  };

  const estimatedPrice = calculatePriceEstimation();

  return (
    <Wrapper>
      <FormContainer>
        {Object.entries(form.criteria).map(([criteriaKey, criteria]) => (
          <QuoteGeneratorCriteria
            key={criteriaKey}
            title={criteria.label}
            options={criteria.options}
            onSelectedOption={(option) =>
              handleSelectedOption(criteriaKey, option)
            }
          />
        ))}
      </FormContainer>

      <PriceEstimationBox>
        <div>
          <PriceEstimation>
            Prix estimé :{" "}
            <b>{estimatedPrice === "N/A" ? "N/A" : `${estimatedPrice}*`}</b>
          </PriceEstimation>
          <br />
          <PriceEstimationDescription>
            {estimatedPrice === "N/A" ? (
              <>
                {width && width >= 700 ? "⬅️ " : "⬆️ "}Veuillez remplir le
                formulaire afin d'obtenir une estimation de prix.
              </>
            ) : (
              <>
                *Cette estimation est indicative et peut varier selon la
                situation réelle sur place.
              </>
            )}
          </PriceEstimationDescription>
        </div>
      </PriceEstimationBox>
    </Wrapper>
  );
};

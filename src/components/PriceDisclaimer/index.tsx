import React from "react";

const INTERVENTION_MINIMUM_PRICE = 90;

interface PropsType {
  className?: string;
}

const PriceDisclaimer = ({ className }: PropsType) => (
  <p className={className}>À partir de {INTERVENTION_MINIMUM_PRICE}€ TTC</p>
);

export default PriceDisclaimer;

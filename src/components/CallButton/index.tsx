import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Button from "components/ui/Button";
import { PhoneNumberTextZone } from "./CallButton.style";

const PHONE_NUMBER_LOCATION_PREFIX = "+33";
const PHONE_NUMBER = "0681152482";
const PHONE_ICON_SIZE = 20;

const CallButton = () => {
  const phoneNumberWithSpaces = PHONE_NUMBER.match(/.{1,2}/g)?.join(" ");
  return (
    <Button href={`tel:${PHONE_NUMBER_LOCATION_PREFIX}${PHONE_NUMBER}`}>
      <StaticImage
        src="../../images/phone-icon.png"
        alt="Phone icon"
        placeholder="blurred"
        width={PHONE_ICON_SIZE}
        height={PHONE_ICON_SIZE}
      />
      <PhoneNumberTextZone>{phoneNumberWithSpaces}</PhoneNumberTextZone>
    </Button>
  );
};

export default CallButton;

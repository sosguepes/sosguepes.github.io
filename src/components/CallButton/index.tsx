import React from "react";
import { Button } from "./CallButton.style";
import { StaticImage } from "gatsby-plugin-image";

const PHONE_NUMBER_LOCATION_PREFIX = "+33";
const PHONE_NUMBER = "0681152482";
const PHONE_ICON_SIZE = 20;

const CallButton = () => {
  const phoneNumberWithSpaces = PHONE_NUMBER.match(/.{1,2}/g)?.join(" ");
  return (
    <a href={`tel:${PHONE_NUMBER_LOCATION_PREFIX}${PHONE_NUMBER}`}>
      <Button>
        <StaticImage
          src="../../images/phone-icon.png"
          alt="Phone icon"
          placeholder="blurred"
          width={PHONE_ICON_SIZE}
          height={PHONE_ICON_SIZE}
        />
        {phoneNumberWithSpaces}
      </Button>
    </a>
  );
};

export default CallButton;

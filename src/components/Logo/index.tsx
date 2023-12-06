import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const LOGO_SIZE = 40;

const Logo = () => {
  return (
    <StaticImage
      src="../../images/logo.png"
      alt="SOS Guêpes 74 logo"
      placeholder="blurred"
      width={LOGO_SIZE}
      height={LOGO_SIZE}
    />
  );
};

export default Logo;

import React from "react";

export const Map = () => {
  const mapWidth = Math.min(640, window.innerWidth - 64);
  const mapHeight = (mapWidth * 2) / 3;
  return (
    <iframe
      src="https://www.google.com/maps/d/embed?mid=1hl8MSwVwgxuycpJJ2eDdSpW_mseodgM&ehbc=2E312F&noprof=1"
      width={`${mapWidth}`}
      height={`${mapHeight}`}
    ></iframe>
  );
};

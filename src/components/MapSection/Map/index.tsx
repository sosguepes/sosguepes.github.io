import React, { useEffect, useState } from "react";

const useWindowDimensions = () => {
  const hasWindow = typeof window !== "undefined";

  function getWindowDimensions() {
    const width = hasWindow ? window.innerWidth : null;
    const height = hasWindow ? window.innerHeight : null;
    return {
      width,
      height,
    };
  }

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    if (hasWindow) {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [hasWindow]);

  return windowDimensions;
};

export const Map = () => {
  const { width } = useWindowDimensions();
  let mapWidth = 640;
  if (width) {
    mapWidth = Math.min(640, width - 64);
  }
  const mapHeight = (mapWidth * 2) / 3;
  return (
    <iframe
      src="https://www.google.com/maps/d/embed?mid=1hl8MSwVwgxuycpJJ2eDdSpW_mseodgM&ehbc=2E312F&noprof=1"
      width={`${mapWidth}`}
      height={`${mapHeight}`}
    ></iframe>
  );
};

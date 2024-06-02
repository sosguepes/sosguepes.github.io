import { useWindowDimensions } from "hooks/useWindowDimensions";
import React from "react";
import { Wrapper } from "./Map.style";
import { MapContainer, TileLayer } from "react-leaflet";
import { Polygon } from "react-leaflet";
import { INTERVENTION_AREA } from "./interventionArea";

export const Map = () => {
  const { width } = useWindowDimensions();
  const maxMapWidth = 500;
  let mapWidth = maxMapWidth;
  if (width) {
    mapWidth = Math.min(maxMapWidth, width - 64);
  }
  const mapHeight = (mapWidth * 2) / 3;
  return (
    <Wrapper>
      <MapContainer
        style={{ height: mapHeight, width: mapWidth }}
        center={[46.239512, 6.512384]}
        zoom={8.45}
        scrollWheelZoom={true}
      >
        <Polygon positions={INTERVENTION_AREA} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </Wrapper>
  );
};

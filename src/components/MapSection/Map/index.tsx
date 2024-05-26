import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export const Map = () => {
  const position = [51.505, -0.09];
  return (
    // <iframe
    //   src="https://www.google.com/maps/d/u/0/embed?mid=14Q9-qQD8qHD2W4wuaWHBTjGHmBElbxk&ehbc=2E312F&noprof=1"
    //   width="640"
    //   height="480"
    // ></iframe>
    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

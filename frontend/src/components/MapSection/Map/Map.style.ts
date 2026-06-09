import { MapContainer } from "react-leaflet";
import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  @media screen and (min-width: 40em) {
    width: calc(50% - 25px);
  }
  height: 300px;
`;

export const StyledMapContainer = styled(MapContainer)`
  width: 100%;
  height: 100%;
`;

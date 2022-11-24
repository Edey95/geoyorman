import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { defaultMarker } from "./defaultMarker";
import "./Map.css";

const center = [21.8427556, -78.7582892];

const centralMarker = [21.8427556, -78.7582892];
const casa1Marker = [21.8437556, -78.7582892];
const casa2Marker = [21.8227556, -78.7582892];
const casa3Marker = [21.8327556, -78.7582892];
const casa4Marker = [21.8527556, -78.7582892];

const MapComp = ({ onOpen }) => {
  return (
    <MapContainer style={{ height: "100vh" }} center={center} zoom={16.25}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={center} icon={defaultMarker}>
        <Popup className="request-popup">
          <button onClick={onOpen}>Ver Fachadas</button>
        </Popup>
      </Marker>
      <Marker position={casa1Marker} icon={defaultMarker}>
        <Popup className="request-popup">
          <button onClick={onOpen}>Ver Fachadas</button>
        </Popup>
      </Marker>
    </MapContainer>
  );
};


export default MapComp;

import React, { useState, useEffect } from "react";
import { Map } from "react-map-gl";

const MAPBOX_API_KEY = process.env.REACT_APP_MAPBOX_TOKEN;

export default function GpsCard({ data }) {
  const [viewState, setViewState] = useState({
    latitude: data.latitude,
    longitude: data.longitude,
    zoom: 10,
  });

  // Update viewState when data.latitude or data.longitude change
  useEffect(() => {
    if (data.latitude && data.longitude) {
      setViewState({
        latitude: data.latitude,
        longitude: data.longitude,
        zoom: 5,
      });
    }
  }, [data.latitude, data.longitude]);

  return (
    <div className="card">
      <h2>GPS</h2>
      <b>Latitude:</b>
      <p>{data.latitude}</p>
      <b>Longitude:</b>
      <p>{data.longitude}</p>
      <Map
        {...viewState}
        mapboxAccessToken={MAPBOX_API_KEY}
        mapStyle={"mapbox://styles/mapbox/streets-v12"}
        attributionControl={false}
        style={{
          width: "100%",
          height: "40%",
          maxHeight: "10em",
          overflow: "none",
        }}
      ></Map>
    </div>
  );
}

import React, { useState } from "react";

export default function GpsCard({ data, setData }) {
  return (
    <div className="card">
      <h2>GPS</h2>
      <p>Latitude {data.latitude}</p>
      <p>Longitude: {data.longitude}</p>
    </div>
  );
}

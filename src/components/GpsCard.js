import React, { useState, useEffect } from "react";

export default function GpsCard({ data }) {
  return (
    <div className="card">
      <h2>GPS</h2>
      <p>Latitude: {data.latitude}</p>
      <p>Longitude: {data.longitude}</p>
    </div>
  );
}

import React, { useState } from "react";

export default function OdomCard({ data, setData }) {
  return (
    <div className="card">
      <h2>Vehicle ODOM</h2>
      <p>northing: {data.northing}</p>
      <p>eating: {data.easting}</p>
      {/* fix zone, it's currently not showing the correct info*/}
      <p>zone: {data.zone}</p>
      <p>depth: {data.depth}</p>
      <p>heading: {data.heading}</p>
      <p>pitch: {data.pitch}</p>
      <p>roll: {data.roll}</p>
    </div>
  );
}

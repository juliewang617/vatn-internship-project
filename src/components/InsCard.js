import React, { useState } from "react";

export default function InsCard({ data, setData }) {
  return (
    <div className="card">
      <h2>INS Status</h2>
      <p>aligned: {data.aligned.toString()}</p>
      <p>pos_valid: {data.pos_valid.toString()}</p>
      <p>heading_valid: {data.heading_valid.toString()}</p>
      <p>dvl_recv {data.dvl_recv.toString()}</p>
      <p>dvl_used: {data.dvl_used.toString()}</p>
      <p>lat_accuracy: {data.lat_accuracy}</p>
      <p>long_accuracy: {data.long_accuracy}</p>
    </div>
  );
}

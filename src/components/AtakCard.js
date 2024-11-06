import React, { useState } from "react";

export default function AtakCard({ data, setData }) {
  return (
    <div className="card">
      <h2>ATAK</h2>
      <p>Connected: {data.connected.toString()}</p>
    </div>
  );
}

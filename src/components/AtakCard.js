import React, { useState, useEffect } from "react";

export default function AtakCard({ data }) {
  return (
    <div className="card">
      <h2>ATAK</h2>
      <p>Connected: {data.connected.toString()}</p>
    </div>
  );
}

import React, { useState, useEffect } from "react";

export default function SysstatCard({ data, setData }) {
  // updated 2 times a sec
  return (
    <div className="card">
      <h2>System status</h2>
      <p>autonomy_state: {data.autonomy_state}</p>
      <p>mission_loaded: {data.mission_loaded.toString()}</p>
      <p>mission_start: {data.mission_start.toString()}</p>
      <p>counting_down: {data.counting_down.toString()}</p>
      <p>awake: {data.awake.toString()}</p>
    </div>
  );
}

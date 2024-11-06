import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import {
  VehicleOdom,
  AtakStatus,
  NavSat,
  INSstatus,
  SystemStatus,
} from "./data";
import AtakCard from "./components/AtakCard";
import GpsCard from "./components/GpsCard";
import InsCard from "./components/InsCard";
import OdomCard from "./components/OdomCard";
import SysstatCard from "./components/SysstatCard";

function App() {
  const [odom, setOdom] = useState(VehicleOdom);
  const [atak, setAtak] = useState(AtakStatus);
  const [gps, setGPS] = useState(NavSat);
  const [ins, setINS] = useState(INSstatus);
  const [sysstat, setSysstat] = useState(SystemStatus);

  return (
    <div className="app">
      <div className="card-container">
        <AtakCard data={atak} setData={setAtak} />
        <GpsCard data={gps} setData={setGPS} />
        <InsCard data={ins} setData={setINS} />
        <OdomCard data={odom} setData={setOdom} />
        <SysstatCard data={sysstat} setData={setSysstat} />
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import React, { useState } from "react";
import {
  VehicleOdom,
  AtakStatus,
  NavSat,
  INSstatus,
  SystemStatus,
} from "./startingData";
import AtakCard from "./components/AtakCard";
import GpsCard from "./components/GpsCard";
import InsCard from "./components/InsCard";
import OdomCard from "./components/OdomCard";
import SysstatCard from "./components/SysstatCard";
import Updater from "./components/Updater";

function App() {
  const [odomData, setOdomData] = useState(() => {
    let d = localStorage.getItem("odom");
    return d && d !== "undefined" ? JSON.parse(d) : VehicleOdom;
  });
  const [atakData, setAtakData] = useState(() => {
    let d = localStorage.getItem("atak");
    return d && d !== "undefined" ? JSON.parse(d) : AtakStatus;
  });
  const [navData, setNavData] = useState(() => {
    let d = localStorage.getItem("navsat");
    return d && d !== "undefined" ? JSON.parse(d) : NavSat;
  });
  const [insData, setINSData] = useState(() => {
    let d = localStorage.getItem("ins");
    return d && d !== "undefined" ? JSON.parse(d) : INSstatus;
  });
  const [sysstatData, setSysstatData] = useState(() => {
    let d = localStorage.getItem("sysstat");
    return d && d !== "undefined" ? JSON.parse(d) : SystemStatus;
  });

  return (
    <div className="app">
      <Updater
        atakData={atakData}
        odomData={odomData}
        INSData={insData}
        navData={navData}
        sysstatData={sysstatData}
        setOdomData={setOdomData}
        setAtakData={setAtakData}
        setNavData={setNavData}
        setINSData={setINSData}
        setSysstatData={setSysstatData}
      />
      <h1>Data display</h1>
      <div className="card-container">
        <AtakCard data={atakData} />
        <GpsCard data={navData} />
        <InsCard data={insData} />
        <OdomCard data={odomData} />
        <SysstatCard data={sysstatData} />
      </div>
    </div>
  );
}

export default App;

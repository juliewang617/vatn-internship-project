import React, { useState, useEffect } from "react";

export default function Updater({
  atakData,
  odomData,
  INSData,
  navData,
  sysstatData,
  setOdomData,
  setAtakData,
  setNavData,
  setINSData,
  setSysstatData,
}) {
  /**
   * Simulates the vessel updating data:
   * once per second, it updates the information provided, then
   * stores it in localStorage
   */
  useEffect(() => {
    var tempOdomData, tempAtakData, tempNavData, tempINSData, tempSysstatData;

    const updateOdomData = setInterval(() => {
      setOdomData((x) => ({
        ...x,
        northing: x.northing,
        easting: x.easting + Math.random(),
        zone: x.zone,
        heading: x.heading,
        pitch: x.pitch,
        roll: x.roll,
      }));
      tempOdomData = odomData;
    }, 200);

    const updateAtakData = setInterval(() => {
      setAtakData((x) => ({ ...x, connected: !x.connected }));
      tempAtakData = atakData;
    }, 1000);

    const updateNavData = setInterval(() => {
      setNavData((x) => ({
        ...x,
        latitude: x.latitude + ((Math.random() * 0.01) % 90.0),
        longitude: x.longitude + ((Math.random() * 0.01) % 90.0),
      }));
      tempNavData = navData;
    }, 200);

    const updateINSData = setInterval(() => {
      setINSData((x) => ({
        ...x,
        lat_accuracy: x.lat_accuracy + Math.random(),
        lon_accuracy: x.lon_accuracy + Math.random(),
      }));
      tempINSData = INSData;
    }, 500);

    const updateSysstatData = setInterval(() => {
      setSysstatData((x) => ({
        ...x,
      }));
      tempSysstatData = sysstatData;
    }, 500);

    // update local storage only once every 5 seconds to reduce load for the
    // purposes of this mocked display
    const updateLocalStorage = setInterval(() => {
      localStorage.setItem("atak", JSON.stringify(tempAtakData));
      localStorage.setItem("navsat", JSON.stringify(tempNavData));
      localStorage.setItem("ins", JSON.stringify(tempINSData));
      localStorage.setItem("odom", JSON.stringify(tempOdomData));
      localStorage.setItem("sysstat", JSON.stringify(tempSysstatData));
      console.log("updated localStorage:", localStorage);
    }, 5000);

    // clear the interval
    return () => {
      clearInterval(updateOdomData);
      clearInterval(updateAtakData);
      clearInterval(updateNavData);
      clearInterval(updateINSData);
      clearInterval(updateSysstatData);
      clearInterval(updateLocalStorage);
    };
  }, []);

  return null;
}

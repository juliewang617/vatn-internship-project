// contains the starting information for each state

// 5 Hz update rate
const VehicleOdom = {
  northing: 10.0,
  easting: 655432.21635,
  zone: [19, "T"],
  depth: 15.0,
  heading: 59.5,
  pitch: 0.5,
  roll: 0.32,
};
// 1 Hz Update Rate
const AtakStatus = {
  connected: true,
};
// 5Hz update rate
const NavSat = {
  latitude: 54.211324,
  longitude: 45.324341,
};

// 1Hz update rate
const INSstatus = {
  aligned: true,
  pos_valid: false,
  heading_valid: false,
  dvl_recv: true,
  dvl_used: false,
  lat_accuracy: 456.654,
  lon_accuracy: 854645.646,
};
// 2Hz update rate
const SystemStatus = {
  autonomy_state: 2,
  mission_loaded: true,
  mission_start: false,
  counting_down: false,
  awake: true,
};

export { VehicleOdom, AtakStatus, NavSat, INSstatus, SystemStatus };

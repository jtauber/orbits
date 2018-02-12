function dist(u, v) {
  return Math.sqrt(Math.pow(u, 2) - Math.pow(v, 2));
}

function round(n, place) {
  return Math.round(n * Math.pow(10, place)) / Math.pow(10, place)
}

function delta_j2000() {
  var jd_ut = 2440587.5 + ((new Date()).getTime() / 8.64E7);
  // 37 leap seconds; last updated 2017-01-01
  var jd_tt = jd_ut + (37 + 32.184) / 86400;
  return jd_tt - 2451545.0;
}

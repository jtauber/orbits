function dist(u, v) {
  return Math.sqrt(Math.pow(u, 2) - Math.pow(v, 2));
}

function round(n, place) {
  return Math.round(n * Math.pow(10, place)) / Math.pow(10, place)
}

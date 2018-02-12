
// elements at J2000
// from http://www.met.rdg.ac.uk/~ross/Astronomy/Planets.html

function mercury() {
  elements = {
    a:     0.38709893 + 0.00000066 * cy,
    e:     0.20563069 + 0.00002527 * cy,
    i:     7.00487    + (-23.51 / 3600) * cy,
    lan:  48.33167    + (-446.30 / 3600) * cy,
    lp:   77.45645    + (573.57 / 3600) * cy,
    ml:  252.25084    + (538101628.29 / 3600) * cy,
  }
  elements["ap"] = elements.lp - elements.lan;
  return elements;
}

function venus() {
  elements = {
    a:     0.72333199 + 0.00000092 * cy,
    e:     0.00677323 + -0.00004938 * cy,
    i:     3.39471    + (-2.86 / 3600) * cy,
    lan:  76.68069    + (-996.89 / 3600) * cy,
    lp:  131.53298    + (-108.80 / 3600) * cy,
    ml:  181.97973    + (210664136.06 / 3600) * cy,
  }
  elements["ap"] = elements.lp - elements.lan;
  return elements;
}

function earth() {
  elements = {
    a:     1.00000011 + -0.00000005 * cy,
    e:     0.01671022 + -0.00003804 * cy,
    i:     0.00005    + (-46.94 / 3600) * cy,
    lan: -11.26064    + (-18228.25 / 3600) * cy,
    lp:  102.94719    + (1198.28 / 3600) * cy,
    ml:  100.46435    + (129597740.63 / 3600) * cy,
  }
  elements["ap"] = elements.lp - elements.lan;
  return elements;
}

function mars() {
  elements = {
    a:     1.52366231 + -0.00007221 * cy,
    e:     0.09341233 + 0.00011902 * cy,
    i:     1.85061    + (-25.47 / 3600) * cy,
    lan:  49.57854    + (-1020.19 / 3600) * cy,
    lp:  336.04084    + (1560.78 / 3600) * cy,
    ml:  355.45332    + (68905103.78 / 3600) * cy,
  }
  elements["ap"] = elements.lp - elements.lan;
  return elements;
}

function jupiter() {
  elements = {
    a:     5.20336301 + 0.00060737 * cy,
    e:     0.04839266 + -0.00012880 * cy,
    i:     1.30530    + (-4.15 / 3600) * cy,
    lan: 100.55615    + (217.17 / 3600) * cy,
    lp:   14.75385    + (839.93 / 3600) * cy,
    ml:   34.40438    + (10925078.35 / 3600) * cy,
  }
  elements["ap"] = elements.lp - elements.lan;
  return elements;
}

function saturn() {
  elements = {
    a:     9.53707032 + -0.00301530 * cy,
    e:     0.05415060 + -0.00036762 * cy,
    i:     2.48446    + (6.11 / 3600) * cy,
    lan: 113.71504    + (-1591.05 / 3600) * cy,
    lp:   92.43194    + (-1948.89 / 3600) * cy,
    ml:   49.94432    + (4401052.95 / 3600) * cy,
  }
  elements["ap"] = elements.lp - elements.lan;
  return elements;
}

function uranus() {
  elements = {
    a:    19.19126393 + 0.00152025 * cy,
    e:     0.04716771 + -0.00019150 * cy,
    i:     0.76986    + (-2.09 / 3600) * cy,
    lan:  74.22988    + (-1681.40 / 3600) * cy,
    lp:  170.96424    + (1312.56 / 3600) * cy,
    ml:  313.23218    + (1542547.79 / 3600) * cy,
  }
  elements["ap"] = elements.lp - elements.lan;
  return elements;
}

function neptune() {
  elements = {
    a:    30.06896348 + -0.00125196 * cy,
    e:     0.00858587 + 0.0000251 * cy,
    i:     1.76917    + (-3.64 / 3600) * cy,
    lan: 131.72169    + (-151.25 / 3600) * cy,
    lp:   44.97135    + (-844.43 / 3600) * cy,
    ml:  304.88003    + (786449.21 / 3600) * cy,
  }
  elements["ap"] = elements.lp - elements.lan;
  return elements;
}

function pluto() {
  elements = {
    a:    39.48168677 + -0.00076912 * cy,
    e:     0.24880766 + 0.00006465 * cy,
    i:    17.14175    + (11.07 / 3600) * cy,
    lan: 110.30347    + (-37.33 / 3600) * cy,
    lp:  224.06676    + (-132.25 / 3600) * cy,
    ml:  238.92881    + (522747.90 / 3600) * cy,
  }
  elements["ap"] = elements.lp - elements.lan;
  return elements;
}

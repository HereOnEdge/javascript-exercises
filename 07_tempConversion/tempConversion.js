const ftoc = function(val) {
  let F = (val - 32) * (5 / 9)
  let C = Math.round(F * 10) / 10;
  return C
};

const ctof = function(val) {
  let C = (val * (9 / 5)) + 32;
  let F = Math.round(C * 10) / 10;
  return F
};

//var rounded = Math.round(number * 10) / 10

//[°F] = [°C] × 9⁄5 + 32
//[°C] = ([°F] − 32) × 5⁄9

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

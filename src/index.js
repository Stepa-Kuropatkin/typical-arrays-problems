
exports.min = function min(array) {
  if (
      typeof array != "undefined" &&
      array != null &&
      array.length != null &&
      array.length > 0
  ) {
      return array.sort((a, b) => a - b).slice(0, 1);
  }
  return 0;
};

exports.max = function max(array) {
  if (
      typeof array != "undefined" &&
      array != null &&
      array.length != null &&
      array.length > 0
  ) {
      return array.sort((a, b) => b - a).slice(0, 1);
  }
  return 0;
};

exports.avg = function avg(array) {
  if (
      typeof array != "undefined" &&
      array != null &&
      array.length != null &&
      array.length > 0
  ) {
      return array.reduce((a, b) => a + b, 0) / array.length;
  }
  return 0;
};

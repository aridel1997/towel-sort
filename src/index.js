
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (matrix == undefined) {
    return [];
  }
  let newArray = matrix.reduce((accum, current, i) => {
    current.sort((a, b) => !(i & 1) ? a - b : b - a).map(e => accum.push(e));
    return accum;
  }, []);
  return newArray;
}

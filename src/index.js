module.exports = function solveEquation(equation) {
  //'479 * x^2 + 301133888 * x - 5544914841268791'
  let arr = equation.split(" ");
  let a = parseInt(arr[0]);
  let b = parseInt(arr[3] + arr[4]);
  let c = parseInt(arr[7] + arr[8]);
  let d = Math.pow(b, 2) - 4*a*c;
  let x1 = Math.round((-b + Math.sqrt(d)) / (2*a));
  let x2 = Math.round((-b - Math.sqrt(d)) / (2*a));

  return [x1, x2].sort((a, b) => a - b);
}

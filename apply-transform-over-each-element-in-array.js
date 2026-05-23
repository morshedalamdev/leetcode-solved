/**
 * Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.
 * The returned array should be created such that returnedArray[i] = fn(arr[i], i).
 *
 * Please solve it without the built-in Array.map method.
 */

// SOLVED: //
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
  let returnedArray = [];

  for (let i = 0; i < arr.length; i++) {
    returnedArray[i] = fn(arr[i], i);
  }
  console.log(returnedArray);
};

function plusone(n) {
  return n + 1;
}
function plusI(n, i) {
  return n + i;
}
function constant(n, i) {
  return 42;
}

map([1, 2, 3], plusone);
map([1, 2, 3], plusI);
map([10, 20, 30], constant);

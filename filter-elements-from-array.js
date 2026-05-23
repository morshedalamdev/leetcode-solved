/**
Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

The fn function takes one or two arguments:
 *  arr[i] - number from the arr
 *  i - index of arr[i]
 *  filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

Please solve it without the built-in Array.filter method.
 */

// SOLVED: //
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  let filteredArr = [];

  arr.forEach((elt, i) => {
    const result = fn(elt, i);
    if (result && result !== 0) {
      filteredArr.push(elt);
    }
  });
  console.log(filteredArr);
};

// TESTS: //
function firstIndex(n, i) {
  return i === 0;
}
function greaterThan10(n) {
  return n > 10;
}
function plusOne(n) {
  return n + 1;
}

filter([1, 2, 3], firstIndex);
filter([0, 10, 20, 30], greaterThan10);
filter([-2, -1, 0, 1, 2], plusOne);

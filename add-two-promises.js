// PROBLEM: //
/**
 * Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. The returned promise should resolve with the sum of the two numbers.
 */

// SOLVED: //
/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function (promise1, promise2) {
  const value1 = await promise1;
  const value2 = await promise2;

  return Promise.resolve(value1 + value2);
};

// TEST: //
addTwoPromises(Promise.resolve(2), Promise.resolve(2)).then(console.log); // 4

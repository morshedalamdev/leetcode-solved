// PROBLEM: //
/**
 * Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.
 */

// SOLVED: //
/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(millis);
    }, millis);
  });
}

// TEST: //
let t = Date.now();
sleep(100).then(() => console.log(Date.now() - t)); // 100

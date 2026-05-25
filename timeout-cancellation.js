// PROBLEM: //
/**
 * Given a function fn, an array of arguments args, and a timeout t in milliseconds, return a cancel function cancelFn.
 * 
 * After a delay of cancelTimeMs, the returned cancel function cancelFn will be invoked.
 *      setTimeout(cancelFn, cancelTimeMs)

 * Initially, the execution of the function fn should be delayed by t milliseconds.
 * 
 * If, before the delay of t milliseconds, the function cancelFn is invoked, it should cancel the delayed execution of fn. Otherwise, if cancelFn is not invoked within the specified delay t, fn should be executed with the provided args as arguments.
 */

// SOLVED: //
/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function (fn, args, t) {
  const timer = setTimeout(() => {
    fn(...args);
  }, t);

  const cancelFn = () => {
    clearTimeout(timer);
  };

  return cancelFn;
};

// TEST: //
const result = [];

const fn = (x) => x * 5;
const args = [2],
  t = 20,
  cancelTimeMs = 50;

const start = performance.now();

const log = (...argsArr) => {
  const diff = Math.floor(performance.now() - start);
  result.push({ time: diff, returned: fn(...argsArr) });
};

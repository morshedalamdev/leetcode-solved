/**
 * Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.
 *
 * Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:
 * - Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
 * - Return k.
 */

// SOLVED: //
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let k = 0;
  nums = nums.map((num) => {
    if (num !== val) {
      nums[k] = num;
      k++;
    }
  });
  return k;
};

// TESTS: //
removeElement([3, 2, 2, 3], 3); // 2
removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2); // 5

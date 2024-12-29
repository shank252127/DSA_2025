/**
 * @param {number[]} nums
 * @return {number}
 */
// Two Pointer Scenerios;
var removeDuplicates = function (nums) {
    let k = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[k] = nums[i]
            k = k + 1;
        }
    }
    return k
};
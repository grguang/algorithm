/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        const space = target - nums[i];
        if (nums[i] in map && map[nums[i]] !== i) {
            return [map[nums[i]], i];
        }
        map[space] = i;
    }
};

exports.twoSum = twoSum;

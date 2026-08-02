var twoSum = function(nums, target) {

    for (i = 0; i < nums.length; i++){
        for (j = i+1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) return [i, j];
        }
    }

};

function twoSumBetter(nums, target) {

    const complementos = new Map();

    complementos.set(nums[0], 0);

    for (i=1; i < nums.length; i++) {

        complemento = target - nums[i];

        if (complementos.has(complemento)) return [complementos.get(complemento), i];

        complementos.set(nums[i], i);
    }
}


console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3,3], 6));

console.log(twoSumBetter([2,7,11,15], 9));
console.log(twoSumBetter([3, 2, 4], 6));
console.log(twoSumBetter([3,3], 6));
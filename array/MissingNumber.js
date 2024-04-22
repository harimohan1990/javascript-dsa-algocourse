var missingNumber = function(nums) {
    let n = nums.length;
    let sum = n * (n + 1) / 2; // Sum of first n natural numbers
    let actualSum = nums.reduce((acc, curr) => acc + curr, 0); // Sum of elements in the array
    return sum - actualSum;
};
let nums = [1, 2, 3, 4, 5];
let k = 2;

var rotate = function(nums, k) {
    k %= nums.length; // Calculate the actual number of rotations needed

    // Reverse the entire array
    reverse(nums, 0, nums.length - 1);
    // Reverse the first k elements
    reverse(nums, 0, k - 1);
    // Reverse the remaining elements
    reverse(nums, k, nums.length - 1);
};

function reverse(nums, start, end) {
    while (start < end) {
        let temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
}

// Call the rotate function
rotate(nums, k);

// Print the modified array
console.log(nums); // Output: [4, 5, 1, 2, 3]

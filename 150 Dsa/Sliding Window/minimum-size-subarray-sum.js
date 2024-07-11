function minSubArrayLen(target, nums) {
    let left = 0;
    let sum = 0;
    let minLength = Infinity;

    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];

        while (sum >= target) {
            minLength = Math.min(minLength, right - left + 1);
            sum -= nums[left];
            left++;
        }
    }

    return minLength === Infinity ? 0 : minLength;
}

/* 

The minSubArrayLen function aims to find the minimal length of a contiguous subarray within the array nums such that the sum of the elements in this subarray is greater than or equal to the given target. If no such subarray exists, the function returns 0.

Here is a detailed breakdown of the code:

Initialization:

left is initialized to 0. This pointer represents the start of the sliding window.
sum is initialized to 0. This variable will store the sum of the elements within the current sliding window.
minLength is initialized to Infinity. This variable will track the minimal length of any valid subarray found.
Sliding Window Expansion:

The for loop iterates over the array nums with the right pointer, representing the end of the sliding window.
In each iteration, nums[right] is added to sum.
Sliding Window Contraction:

The while loop checks if the current window's sum (sum) is greater than or equal to target.
If true, it updates minLength with the smaller value between minLength and the current window length (right - left + 1).
It then shrinks the window from the left by subtracting nums[left] from sum and incrementing left.
Result:

After the for loop completes, the function checks if minLength is still Infinity. If so, it means no valid subarray was found, and it returns 0.
Otherwise, it returns minLength.
Space and Time Complexity
Time Complexity: O(n)

The for loop iterates over each element of the array exactly once, making the time complexity O(n).
The while loop is also dependent on the right pointer's movement and will iterate at most n times in total throughout the entire execution of the function.
Thus, each element is processed at most twice (once by the right pointer and once by the left pointer), leading to a linear time complexity of O(n).
Space Complexity: O(1)

The space complexity is constant, O(1), as no extra space proportional to the input size is used.
Only a few variables (left, sum, minLength, and right) are used, all of which require constant space regardless of the size of the input array.


*/
var twoSum = function(numbers, target) {
    let left = 0; // Initialize the left pointer to the start of the array
    let right = numbers.length - 1; // Initialize the right pointer to the end of the array
    
    while (left < right) { // Loop until the pointers meet
        if (numbers[left] + numbers[right] == target) { // Check if the sum of the elements at the pointers equals the target
            return [left + 1, right + 1]; // Return the 1-based indices of the elements if the target sum is found
        } else if (numbers[left] + numbers[right] > target) { // If the sum is greater than the target
            right--; // Move the right pointer leftwards to reduce the sum
        } else { // If the sum is less than the target
            left++; // Move the left pointer rightwards to increase the sum
        }
    }
    
    return []; // Return an empty array if no such pair is found
};


/*
Time Complexity: O(n)
Space Complexity: O(1)
*/
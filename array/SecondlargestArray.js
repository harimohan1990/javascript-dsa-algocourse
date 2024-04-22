function findSecondLargest(nums) {
    if (nums.length < 2) {
        return "Array should have at least two elements.";
    }

    let largest = nums[0];
    let secondLargest = Number.MIN_SAFE_INTEGER;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > largest) {
            secondLargest = largest;
            largest = nums[i];
        } else if (nums[i] > secondLargest && nums[i] !== largest) {
            secondLargest = nums[i];
        }
    }

    if (secondLargest === Number.MIN_SAFE_INTEGER) {
        return "There is no second largest element.";
    }

    return secondLargest;
}

// Example usage
let nums = [10, 5, 20, 8, 25];
console.log("Second largest element:", findSecondLargest(nums)); // Output: 20

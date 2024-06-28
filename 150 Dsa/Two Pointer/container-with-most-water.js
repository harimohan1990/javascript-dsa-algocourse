var maxArea = function(height) {
    let maxArea = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        maxArea = Math.max(maxArea, (right - left) * Math.min(height[left], height[right]));

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;    
};

/* 
Sure! Here is a detailed explanation of the code along with its time and space complexity analysis:

### Code Description

The function `maxArea` takes an array `height` as input, where each element represents the height of a vertical line drawn on the x-axis. The goal is to find the maximum area of water that can be contained between two lines.

1. **Initialization:**
   - `maxArea` is initialized to 0. This variable will store the maximum area found.
   - `left` is initialized to 0. This pointer starts at the beginning of the array.
   - `right` is initialized to `height.length - 1`. This pointer starts at the end of the array.

2. **Two-pointer Technique:**
   - The function uses a `while` loop that continues as long as `left` is less than `right`.
   - Inside the loop:
     - The area between the lines at `left` and `right` is calculated as `(right - left) * Math.min(height[left], height[right])`. This is because the width of the container is the distance between the two pointers (`right - left`), and the height is the minimum of the two lines (`Math.min(height[left], height[right])`).
     - `maxArea` is updated to the maximum of its current value and the newly calculated area.
     - If the height at the `left` pointer is less than the height at the `right` pointer, the `left` pointer is moved one step to the right (`left++`). Otherwise, the `right` pointer is moved one step to the left (`right--`). This is done to try and find a taller line that could potentially form a larger area.

3. **Return Value:**
   - The function returns `maxArea`, which is the maximum area of water that can be contained between two lines.

### Time Complexity

The time complexity of the function is \(O(n)\), where \(n\) is the length of the `height` array. This is because the function uses a two-pointer approach that scans the array from both ends towards the center. Each element in the array is processed at most once.

### Space Complexity

The space complexity of the function is \(O(1)\). This is because the function uses only a constant amount of extra space, regardless of the size of the input array. The extra space is used for variables like `maxArea`, `left`, and `right`, which do not depend on the input size.

### Summary

- **Time Complexity:** \(O(n)\)
- **Space Complexity:** \(O(1)\)

This implementation efficiently finds the maximum area of water that can be contained between two lines using the two-pointer technique.
*/
function isPalindrome(s) {
    let left = 0; // Initialize pointer to the start of the string
    let right = s.length - 1; // Initialize pointer to the end of the string

    while (left < right) {
        // Continue looping until the two pointers meet in the middle

        // Skip non-alphanumeric characters from the start
        while (left < right && !isAlphaNumeric(s[left])) {
            left++;
        }

        // Skip non-alphanumeric characters from the end
        while (left < right && !isAlphaNumeric(s[right])) {
            right--;
        }

        // Compare characters
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }

        // Move towards the middle
        left++;
        right--;
    }

    return true;
}

function isAlphaNumeric(c){

    let code  = c.charCodeAt(0); 

    return (code > 47 && code <58) || 
            (code >64 && code < 91 ) ||
            (code >96  && code <124); 

}
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true


/*
Analyzing the time and space complexity of the `isPalindrome` function involves examining how the function behaves in terms of both time (number of operations) and memory (space used) relative to the input size.

### Time Complexity

1. **Character Comparison and Pointer Movement**:
   - The function involves two pointers, `left` and `right`, initialized at the start and end of the string, respectively.
   - In the worst case, each pointer traverses half of the string length. Therefore, in terms of simple traversal, the complexity would be \(O(n)\), where \(n\) is the length of the string.
   - However, the function performs additional checks to skip non-alphanumeric characters, but each character is still processed at most twice (once by each pointer). Thus, the added complexity due to these checks does not exceed \(O(n)\).

2. **Character Conversion and Comparison**:
   - Conversion to lowercase and comparison is constant time, \(O(1)\), for each character checked.
   - Since the string is only traversed once by the pointers, the overall operations related to character comparison remain linear with respect to the string length.

Combining the traversal and character checking, the worst-case time complexity remains \(O(n)\).

### Space Complexity

1. **Space Usage**:
   - The space used by the function is primarily for the pointers and a few variables for temporary storage (like `code` in `isAlphaNumeric`).
   - There is no use of any additional data structures that grow with the size of the input. All operations are performed in-place using the existing string and a constant number of variables.

Thus, the space complexity is \(O(1)\), indicating constant space usage irrespective of the input size.

### Summary

- **Time Complexity**: \(O(n)\), where \(n\) is the length of the string. This is because each character is processed linearly by the pointers, and all operations related to character processing are constant time for each character.
- **Space Complexity**: \(O(1)\), since no additional space is used that scales with the input size; only a fixed number of temporary variables are used.

This function is efficient in both time and space for checking if a string is a palindrome, making it well-suited for large strings as it does not require extra space proportional to the size of the input.


*/ 
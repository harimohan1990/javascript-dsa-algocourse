
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let i = 0;
    let j = 0;

    while (j < t.length) {
        if (s[i] === t[j]) {
            i++;
        }
        j++;

        if (i === s.length) {
            return true;
        }
    }

    return false;
};




/*    
Here’s a detailed description of the `isSubsequence` function:

### Function Overview
The `isSubsequence` function checks whether the string `s` is a subsequence of the string `t`. A string `s` is a subsequence of `t` if `s` can be derived from `t` by deleting some or no characters without changing the order of the remaining characters.

### Parameters
- **s**: The string that we want to check if it is a subsequence.
- **t**: The string in which we want to check for the subsequence.

### Return Value
- The function returns a boolean value:
  - `true` if `s` is a subsequence of `t`.
  - `false` otherwise.

### Detailed Code Walkthrough

1. **Initialization**:
   ```js
   let i = 0; // Pointer for string s
   let j = 0; // Pointer for string t
   ```
   Two pointers `i` and `j` are initialized to zero. `i` will traverse the string `s`, and `j` will traverse the string `t`.

2. **Main Loop**:
   ```js
   while (j < t.length) {
   ```
   A `while` loop runs as long as `j` is less than the length of `t`. This loop ensures we traverse through all characters of `t`.

3. **Character Match Check**:
   ```js
   if (s[i] === t[j]) {
       i++;
   }
   ```
   Inside the loop, we check if the current character in `s` (`s[i]`) matches the current character in `t` (`t[j]`). If they match, we move the pointer `i` to the next character in `s` by incrementing `i`.

4. **Always Move j**:
   ```js
   j++;
   ```
   Regardless of whether a match was found or not, we always move the pointer `j` to the next character in `t`.

5. **Subsequence Found Check**:
   ```js
   if (i === s.length) {
       return true;
   }
   ```
   After moving `i`, we check if `i` has reached the length of `s`. If `i` equals the length of `s`, it means all characters of `s` have been matched in order in `t`, so we return `true`.

6. **Exiting the Loop**:
   ```js
   return false;
   ```
   If the loop completes without returning `true`, it means not all characters of `s` were found in `t` in the required order, so we return `false`.

### Summary
The function uses two pointers to traverse the strings `s` and `t`. It checks if each character of `s` appears in `t` in the correct order, and if it finds all characters of `s` in `t`, it returns `true`. If the traversal of `t` is completed without finding all characters of `s`, it returns `false`.

Time Complexity: O(n), where n is the length of t.
Space Complexity: O(1).
*/ 
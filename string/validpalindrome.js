function isPalindrome(s) {
    // Remove non-alphanumeric characters and convert to lowercase
    s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Check if the string is a palindrome
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

// Test cases
console.log(isPalindrome("A man, a plan, a canal, Panama!")); // true
console.log(isPalindrome("race a car")); // false


// -----------------

function palindrome(str) {
    var re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, '');
    var len = str.length;
    for (var i = 0; i < len/2; i++) {
      if (str[i] !== str[len - 1 - i]) {
          return false;
      }
    }
    return true;
   }
   palindrome("A man, a plan, a canal. Panama");


   function validatePalin(str) {  
  
    // get the total length of the words  
    const len = string.length;  
  
    // Use for loop to divide the words into 2 half  
    for (let i = 0; i < len / 2; i++) {  
  
        // validate the first and last characters are same  
        if (string[i] !== string[len - 1 - i]) {  
            alert( 'It is not a palindrome');  
        }  
    }  
    alert( 'It is a palindrome');  
}  
  
// accept the string or number from the prompt  
const string = prompt('Enter a string or number: ');  
  
const value = validatePalin(string);  
  
console.log(value);
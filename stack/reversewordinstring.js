
	// Javascript program to 
	// reverse a String
	
	// Reverse the letters 
	// of the word 
	function reverse(str,start,end)
	{
		// Temporary variable 
		// to store character 
		let temp;
		
		
		while (start <= end) 
		{
			// Swapping the first 
			// and last character 
			temp = str[start];
			str[start]=str[end];
			str[end]=temp;
			start++;
			end--;
		}
	}
	// Function to reverse words
	function reverseWords(s)
	{
		// Reversing individual words as
		// explained in the first step
		s=s.split("");
		let start = 0;
		for (let end = 0; end < s.length; end++) 
		{
			// If we see a space, we 
			// reverse the previous 
			// word (word between 
			// the indexes start and end-1
			// i.e., s[start..end-1]
			if (s[end] == ' ') 
			{
				reverse(s, start, end);
				start = end + 1;
			}
		}
		// Reverse the last word
		reverse(s, start, s.length - 1);
		
		// Reverse the entire String
		reverse(s, 0, s.length - 1);
		return s.join("");
	}
	// Driver Code
	var s = "i like this program very much ";
	
	
	document.write(reverseWords(s));



	
// Javascript program to check for
// even or odd

// Function to find k-th
// missing element
function missingK(a, k, n)
{
	let difference = 0, ans = 0, count = k;
	let flag = false;
	
	//case when first number is not 1
	if (a[0] != 1){
	difference = a[0]-1;
	if (difference >= count){
		return count;
		}
	count -= difference;
	}
	
	// iterating over the array
	for(let i = 0 ; i < n - 1; i++)
	{
		difference = 0;
		
		// Check if i-th and
		// (i + 1)-th element
		// are not consecutive
		if ((a[i] + 1) != a[i + 1])
		{
			
			// Save their difference
			difference += (a[i + 1] - a[i]) - 1;
			
			// Check for difference
			// and given k
			if (difference >= count)
			{
				ans = a[i] + count;
				flag = true;
				break;
			}
			else
				count -= difference;
		}
	}
	
	// If found
	if (flag)
		return ans;
	else
		return -1;
}

// Driver code

// Input array
let a = [ 1, 5, 11, 19 ];

// k-th missing element
// to be found in the array
let k = 11;
let n = a.length;

// Calling function to
// find missing element
let missing = missingK(a, k, n);

document.write(missing);



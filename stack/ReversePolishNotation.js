// Javascript code to evaluate reverse polish notation 
function eval(A)
{

	// Initialize the stack
	let st = [];
	
	// Iterating to the each character
	// in the array of the string
	for (let i = 0; i < A.length; i++)
	{
	
		// If the character is not the special character
		// ('+', '-' ,'*' , '/')
		// then push the character to the stack
		if (A[i] != "+" && A[i] != "-" && A[i] != "/"
			&& A[i] != "*") {
			st.push(parseInt(A[i]));
			continue;
		}
		
		// else if the character is the special
		// character then use them to
		// perform the action
		else {
			let b = parseInt(st.pop());
			let a = parseInt(st.pop());
			if (A[i] == "+")
				st.push(a + b);
			else if (A[i] == "-")
				st.push(a - b);
			else if (A[i] == "*")
				st.push(a * b);
			else
				st.push(parseInt(a / b));
		}
	}
	return parseInt(st[st.length-1]);
}

	let A = [ "10", "6", "9", "3", "+", "-11", "*",
			"/", "*", "17", "+", "5", "+" ];

	let res = eval(A);
	console.log(res);
	
	// This code is contributed by Pushpesh Raj.

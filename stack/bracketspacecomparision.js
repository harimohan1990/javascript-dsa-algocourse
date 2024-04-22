
function removeBackspaces(s)
{
	let n = s.length;

	// To point at position after considering the
	// backspaces
	let idx = 0;

	for (let i = 0; i < n; i++) {
		if (s[i] != '#') {
			s[idx] = s[i];
			idx++;
		}
		else if (s[i] == '#' && idx >= 0) {
			idx--;
		}

		// This idx can never point at negative index
		// position
		if (idx < 0)
			idx = 0;
	}

	return s.substring(0, idx);
}

// Driver code
// initialise two strings
let s = "equ#ual";
let t = "gee##eeks";

if (removeBackspaces(s) == removeBackspaces(t))
	console.log("True");
else
	console.log("False");

// This code is contributed by poojaagarwal2.

// ------------------------------------------------------------------
// JavaScript program to check if two strings after processing
// backspace character are equal or not
// function to compare two strings
function compare(s, t){
	// function to remove backspaces and return refined string
	function remove_backspaces(string){
		a = [];
		for(let i = 0; i<string.length; i++){
			if(string[i] != '#') a.push(string[i]);
			else if(a.length > 0) a.pop();
		}
		return a.join("")
	}
	
	s = remove_backspaces(s);
	t = remove_backspaces(t);
	return s == t;
}

// driver program for above functions
let s = "geee#e#ks";
let t = "gee##eeks";

if(compare(s,t)) console.log("True");
else console.log("False");

// THIS CODE IS CONTRIBUTED BY YASH AGARWAL(YASHAGARWAL2852002)

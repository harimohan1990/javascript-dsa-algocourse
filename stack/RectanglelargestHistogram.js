

function max_area_histogram(histogram){ 
	
	// This function calculates maximum 
	// rectangular area under given 
	// histogram with n bars 

	// Create an empty stack. The stack 
	// holds indexes of histogram[] list. 
	// The bars stored in the stack are 
	// always in increasing order of 
	// their heights. 
	let stack = [] 

	let max_area = 0 // Initialize max area 

	// Run through all bars of 
	// given histogram 
	let index = 0 
	while(index < histogram.length){ 
		
		// If this bar is higher 
		// than the bar on top 
		// stack, push it to stack 

		if(stack.length == 0 || histogram[stack[stack.length-1]] <= histogram[index]){ 
			stack.push(index) 
			index += 1 
		} 

		// If this bar is lower than top of stack, 
		// then calculate area of rectangle with 
		// stack top as the smallest (or minimum 
		// height) bar.'i' is 'right index' for 
		// the top and element before top in stack 
		// is 'left index' 
		else{ 
			// pop the top 
			let top_of_stack = stack.pop() 

			// Calculate the area with 
			// histogram[top_of_stack] stack 
			// as smallest bar 
			let area = (histogram[top_of_stack] * 
				(stack.length > 0 ? (index - stack[stack.length-1] - 1) : index)) 

			// update max area, if needed 
			max_area = Math.max(max_area, area) 
		} 
	} 
	// Now pop the remaining bars from 
	// stack and calculate area with 
	// every popped bar as the smallest bar 
	while(stack.length > 0){ 
		
		// pop the top 
		let top_of_stack = stack.pop() 

		// Calculate the area with 
		// histogram[top_of_stack] 
		// stack as smallest bar 
		let area = (histogram[top_of_stack] * 
			(stack.length > 0 ? (index - stack[stack.length-1] - 1) : index)) 

		// update max area, if needed 
		max_area = Math.max(max_area, area) 
	} 

	// Return maximum area under 
	// the given histogram 
	return max_area 
} 

// Driver Code 
let hist = [6, 2, 5, 4, 5, 1, 6] 
document.write("Maximum area is", max_area_histogram(hist)) 


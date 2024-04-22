
// Javascript program to find length
// of the shortest chain
// transformation from source
// to target
	
// Returns length of shortest chain
// to reach 'target' from 'start'
// using minimum number of adjacent moves.
// D is dictionary
	function shortestChainLen(start,target,D)
	{
		if(start == target)
	return 0;
	
	// If the target String is not
	// present in the dictionary
	if (!D.has(target))
		return 0;

	// To store the current chain length
	// and the length of the words
	let level = 0, wordlength = start.length;

	// Push the starting word into the queue
	let Q = [];
	Q.push(start);

	// While the queue is non-empty
	while (Q.length != 0)
	{

		// Increment the chain length
		++level;

		// Current size of the queue
		let sizeofQ = Q.length;

		// Since the queue is being updated while
		// it is being traversed so only the
		// elements which were already present
		// in the queue before the start of this
		// loop will be traversed for now
		for (let i = 0; i < sizeofQ; ++i)
		{

			// Remove the first word from the queue
			let word = Q[0].split("");
			Q.shift();

			// For every character of the word
			for (let pos = 0; pos < wordlength; ++pos)
			{

				// Retain the original character
				// at the current position
				let orig_char = word[pos];

				// Replace the current character with
				// every possible lowercase alphabet
				for (let c = 'a'.charCodeAt(0); c <= 'z'.charCodeAt(0); ++c)
				{
					word[pos] = String.fromCharCode(c);

					// If the new word is equal
					// to the target word
					if (word.join("") == target)
						return level + 1;

					// Remove the word from the set
					// if it is found in it
					if (!D.has(word.join("")))
						continue;
					D.delete(word.join(""));

					// And push the newly generated word
					// which will be a part of the chain
					Q.push(word.join(""));
				}

				// Restore the original character
				// at the current position
				word[pos] = orig_char;
			}
		}
	}

	return 0;
	}
	
	// Driver code
	// make dictionary
	let D = new Set();
	D.add("poon");
	D.add("plee");
	D.add("same");
	D.add("poie");
	D.add("plie");
	D.add("poin");
	D.add("plea");
	let start = "toon";
	let target = "plea";
	document.write("Length of shortest chain is: "
		+ shortestChainLen(start, target, D));


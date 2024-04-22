
	// Javascript program to rot all oranges when you can move
	// in all the four direction from a rotten orange
	let R = 3;
	let C = 5;

	// Check if i, j is under the array limits of row and column
	function issafe(i, j)
	{
		if (i >= 0 && i < R && j >= 0 && j < C)
			return true;
		return false;
	}

	function rotOranges(v)
	{
		let changed = false;
		let no = 2;
		while (true) {
			for (let i = 0; i < R; i++) {
				for (let j = 0; j < C; j++) {

					// Rot all other oranges present at
					// (i+1, j), (i, j-1), (i, j+1), (i-1, j)
					if (v[i][j] == no) {
						if (issafe(i + 1, j) && v[i + 1][j] == 1) {
							v[i + 1][j] = v[i][j] + 1;
							changed = true;
						}
						if (issafe(i, j + 1) && v[i][j + 1] == 1) {
							v[i][j + 1] = v[i][j] + 1;
							changed = true;
						}
						if (issafe(i - 1, j) && v[i - 1][j] == 1) {
							v[i - 1][j] = v[i][j] + 1;
							changed = true;
						}
						if (issafe(i, j - 1) && v[i][j - 1] == 1) {
							v[i][j - 1] = v[i][j] + 1;
							changed = true;
						}
					}
				}
			}

			// if no rotten orange found it means all
			// oranges rottened now
			if (!changed)
				break;
			changed = false;
			no++;
		}

		for (let i = 0; i < R; i++) {
			for (let j = 0; j < C; j++) {

				// if any orange is found to be
				// not rotten then ans is not possible
				if (v[i][j] == 1)
					return -1;
			}
		}

		// Because initial value for a rotten
		// orange was 2
		return no - 2;
	}

// Driver code
	let v = [ [ 2, 1, 0, 2, 1 ],
					[ 1, 0, 1, 2, 1 ],
					[ 1, 0, 0, 2, 1 ] ];

	document.write("Max time incurred: " + rotOranges(v));
	
	// This code is contributed by mukesh07.

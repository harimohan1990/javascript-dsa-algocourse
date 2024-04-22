
	// Javascript implementation of the approach
	
	// Function that returns true if
	// the given pixel is valid
	function isValid(screen, m, n, x, y, prevC, newC)
	{
		if(x<0 || x>= m || y<0 || y>= n || screen[x][y]!= prevC
		|| screen[x][y]== newC)
			return false;
		return true;
	}


	// FloodFill function
	function floodFill(screen, m, n, x, y, prevC, newC)
	{
		let queue = [];

		// Append the position of starting
		// pixel of the component
		queue.push([x, y]);

		// Color the pixel with the new color
		screen[x][y] = newC;

		// While the queue is not empty i.e. the
		// whole component having prevC color
		// is not colored with newC color
		while(queue.length > 0)
		{
			// Dequeue the front node
			currPixel = queue[queue.length - 1];
			queue.pop();

			let posX = currPixel[0];
			let posY = currPixel[1];

			// Check if the adjacent
			// pixels are valid
			if(isValid(screen, m, n, posX + 1, posY, prevC, newC))
			{
				// Color with newC
				// if valid and enqueue
				screen[posX + 1][posY] = newC;
				queue.push([posX + 1, posY]);
			}

			if(isValid(screen, m, n, posX-1, posY, prevC, newC))
			{
				screen[posX-1][posY]= newC;
				queue.push([posX-1, posY]);
			}

			if(isValid(screen, m, n, posX, posY + 1, prevC, newC))
			{
				screen[posX][posY + 1]= newC;
				queue.push([posX, posY + 1]);
			}

			if(isValid(screen, m, n, posX, posY-1, prevC, newC))
			{
				screen[posX][posY-1]= newC;
				queue.push([posX, posY-1]);
			}
		}
	}
	
	let screen =[
	[1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 0, 0],
	[1, 0, 0, 1, 1, 0, 1, 1],
	[1, 2, 2, 2, 2, 0, 1, 0],
	[1, 1, 1, 2, 2, 0, 1, 0],
	[1, 1, 1, 2, 2, 2, 2, 0],
	[1, 1, 1, 1, 1, 2, 1, 1],
	[1, 1, 1, 1, 1, 2, 2, 1]];

	// Row of the display
	let m = screen.length;

	// Column of the display
	let n = screen[0].length;

	// Co-ordinate provided by the user
	let x = 4;
	let y = 4;

	// Current color at that co-ordinate
	let prevC = screen[x][y];

	// New color that has to be filled
	let newC = 3;

	floodFill(screen, m, n, x, y, prevC, newC);


	// Printing the updated screen
	for(let i = 0; i < m; i++)
	{
		for(let j = 0; j < n; j++)
		{
			document.write(screen[i][j] + " ");
		}
		document.write("</br>");
	}
	


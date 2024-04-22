let v = [];



function hit(timestamp)
{
	v.push(timestamp);
}

// Time Complexity : O(1)

/** Return the number of hits in the past 5 minutes.
	@param timestamp - The current timestamp (in
	seconds granularity). */
function getHits(timestamp)
{
	let i, j;
	for (i = 0; i < v.length; ++i) {
		if (v[i] > timestamp - 300) {
			break;
		}
	}
	return v.length - i;
}


//Method 1: Using Recursion


var generate = function(numRows) {
    if (numRows === 0) {
        return [];
    }
    if (numRows === 1) {
        return [[1]];
    }
    
    let prevRows = generate(numRows - 1);
    let newRow = new Array(numRows).fill(1);
    
    for (let i = 1; i < numRows - 1; i++) {
        newRow[i] = prevRows[numRows - 2][i - 1] + prevRows[numRows - 2][i];
    }
    
    prevRows.push(newRow);
    return prevRows;
};

//Method 2: Using Combinatorial Formula

var generate = function(numRows) {
    let result = [];
    if (numRows === 0) {
        return result;
    }

    let firstRow = [1];
    result.push(firstRow);

    for (let i = 1; i < numRows; i++) {
        let prevRow = result[i - 1];
        let currentRow = [1];

        for (let j = 1; j < i; j++) {
            currentRow.push(prevRow[j - 1] + prevRow[j]);
        }

        currentRow.push(1);
        result.push(currentRow);
    }

    return result;
};

/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    if (n === 1) {
        return [["Q"]];
    }
    if (n == 2 || n === 3) {
        return [];
    }
    let results = [];
    let solution = Array(n).fill(-1);
    solveNQueensRec(n, solution, 0, results);
    return results;
};

// Recursive worker function
function solveNQueensRec(n, solution, row, results) {
    if (row == n) {
        const solutionStr = constructSolutionString(solution);
        results.push(solutionStr);
        return;
    }

    for (let i = 0; i < n; i++) {
        let valid = isValidMove(row, i, solution);
        if (valid) {
            solution[row] = i;
            solveNQueensRec(n, solution, row + 1, results);
        }
    }
}


// this method determines if a queen can be placed at
// proposedRow, proposedCol with current solution i.e.
// this move is valid only if no queen in current
// solution may attack the square at proposedRow and
// proposedCol
function isValidMove(proposedRow, proposedCol, solution) {
    for (let i = 0; i < proposedRow; i++) {
        let oldRow = i,
            oldCol = solution[i],
            diagonalOffset = proposedRow - oldRow;

        if (
            oldCol == proposedCol ||
            oldCol == proposedCol - diagonalOffset ||
            oldCol == proposedCol + diagonalOffset
        ) {
            return false;
        }
    }
    return true;
}

function constructSolutionString(solution) {
    const returnArr = [];
    for (i = 0; i < solution.length; i++) {
        const returnStr = Array(solution.length).fill('.');
        returnStr[solution[i]] = "Q";
        returnArr.push(returnStr.join(''));
    }
    return returnArr;
}
function selectionSort(arr) {
    const len = arr.length;

    for (let i = 0; i < len - 1; i++) {
        let minIndex = i;

        // Find the index of the minimum element in the unsorted portion of the array
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // Swap the minimum element with the first element of the unsorted portion
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }

    return arr;
}

// Example usage:
const arr = [64, 34, 25, 12, 22, 11, 90];
console.log("Original array:", arr);
console.log("Sorted array:", selectionSort(arr));

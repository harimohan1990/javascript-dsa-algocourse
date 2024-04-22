var countSmaller = function (nums) {
    let result = new Array(nums.length).fill(0);

    let mergeSort = (arr, indices) => {
        if (arr.length <= 1) {
            return arr;
        }

        let mid = Math.floor(arr.length / 2);
        let left = arr.slice(0, mid);
        let right = arr.slice(mid);
        let leftIndices = indices.slice(0, mid);
        let rightIndices = indices.slice(mid);

        let sortedLeft = mergeSort(left, leftIndices);
        let sortedRight = mergeSort(right, rightIndices);

        let i = 0,
            j = 0,
            count = 0;

        while (i < sortedLeft.length || j < sortedRight.length) {
            if (j === sortedRight.length || i < sortedLeft.length && sortedLeft[i] <= sortedRight[j]) {
                arr[i + j] = sortedLeft[i];
                indices[i + j] = leftIndices[i];
                result[indices[i + j]] += count;
                i++;
            } else {
                arr[i + j] = sortedRight[j];
                indices[i + j] = rightIndices[j];
                count++;
                j++;
            }
        }

        return arr;
    };

    mergeSort(nums, Array.from({ length: nums.length }, (_, i) => i));

    return result;
};
var findDisappearedNumbers = function (nums) {
    const uniqueValues = new Set(nums);
    const result = [];
  
    for (let i = 1; i <= nums.length; i++) {
      if (!uniqueValues.has(i)) {
        result.push(i);
      }
    }
  
    return result;
  };
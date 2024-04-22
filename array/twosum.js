function twoSum(nums,target){
  
  for(let i=0;i<nums.length;i++){
    for(let j=i+1;j<nums.length;i++){
      if(nums[i] + nums[j] ===target){
        return [i,j]
      }
    }
  }
}
// nums = [2,7,11,15], target = 9
const x = twoSum([2,7,11,15],9);

console.log(x);
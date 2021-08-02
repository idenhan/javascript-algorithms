var removeDuplicates = function (nums) {
  let result = 1,
    i = 0,
    j = 1;

  if (nums.length === 0) return 0;

  while (i < nums.length && j < nums.length) {
    if (nums[i] === nums[j]) j++;
    else {
      result += 1;
      i++;
      nums[i] = nums[j];
      j++;
    }
  }
  return result;
};

console.log(removeDuplicates([1, 1, 2]));

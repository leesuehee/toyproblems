let MaxSubarray = function(arr) { 
  let sum = arr[0];
  let currentSum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (currentSum < 0) currentSum = 0;   
    currentSum+= arr[i];
    sum = Math.max(sum, currentSum);
  }
  return sum;
};
   

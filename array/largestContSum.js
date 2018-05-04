let largestContSum = function(arr) {
  let max = 0;

  for(let i = 0; i < arr.length; i++) {
    sum = arr[i];
    
    for (let j = i+1; j < arr.length-1; j++) {
      sum += arr[j];
    };
    if (sum > max) max = sum;
  };
  return max; 
};

// largestContSum([-2,-3,4,-1,-2,1,5,-3])
let largestSum = function(array) {
  let max = 0;
  let update = 0; 

  for(let num of array) { 
    update += num; 
    if (update < 0) update = 0;
    if (max < update) max = update; 
  }

  return max;
};

// console.log(largestSum([-2,-3,4,-1,-2,1,5,-3]))




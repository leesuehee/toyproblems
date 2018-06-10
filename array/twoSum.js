let twoSum = function(arr) {
  let max = 0;
  
  for(let i = 0; i < arr.length-1; i++) {
    let curr = arr[i];
    let next = arr[i+1];
    let sum = curr + next;

    if (sum > max) max = sum; 
  }

  return max;
}
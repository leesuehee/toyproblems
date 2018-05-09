
/*
 * Write a function that accepts a 2-dimensional array (that is, an array containing many same-length arrays),
 * and prints out every value found, but in a spiral from the upper left in to the center
 * Please write some form of specs, tests, or assertions for your code, and check as many edge cases as you can think of
 *
 * example:
    spiralTraversal([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);
    returns [1, 2, 3, 6, 9, 8, 7, 4, 5]
 */


//I : a matrix
//O : an array of the matrix' value in a spiral format from upper left - clockwise
//C : ?
//E : handling matrix's differing that are  m x n

// create output arr
// create toggle variables
    // up, down. right, left

// depeding on the toggle direction i will 

let spiralTraversal = function(matrix) {
  let output = [];
  
  let toggleRight = function(fatrix) {
    for (let i = 0; i < fatrix[0].length; i++) {
      output.push(fatrix[0][i]);
    }
    return fatrix;
  }
  
  let toggleLeft = function(fatrix) {
    for (let i = fatrix[fatrix.length-1]; i >= 0; i--) {
      output.push(fatrix[fatrix.length-1][i]);
    }
    fatrix.splice(fatrix.length-1,1);
    return fatrix;
  }
  
  let toggleDown = function(fatrix) {
    for (let i = 0; i < fatrix.length; i++) {
      output.push(fatrix[i][fatrix[i].length-1]);
      fatrix.splice(fatrix[i][fatrix[i].length-1],1);
    }
    console.log('after down', fatrix)
    return fatrix;
  }
  
  let toggleUp = function(fatrix) {
    for (let i = fatrix.length-1; i >= 0; i--) {
      output.push(fatrix[i][0]);
      fatrix.splice(fatrix[i][0],1)
    }
    return fatrix;
  } 
  let fatrix = matrix;
  
  while(fatrix.length>0) {
    toggleRight(fatrix) 
    toggleDown(fatrix)
    toggleLeft(fatrix)
    toggleUp(fatrix)
  };

  console.log(output)
  return output;
};

spiralTraversal([
  [1,2,3],
  [4,5,6],
  [7,8,9]
]);

// [1, 2, 3, 6, 9, 8, 7, 4, 5]
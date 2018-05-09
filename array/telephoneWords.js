// I: string of integers
// O: an array of all permulation that can be written on a phone with the input string
// C: permutations must be in order 
// E: 1 AND 0 are left as is

let telephoneWords = function(str) {
  let reference = {
    '0':0,
    '1':1,
    '2':'abc',
    '3':'def',
    '4':'ghi',
    '5':'jkl',
    '6':'mno',
    '7':'pqrs',
    '8':'tuv',
    '9':'wxyz'
  };

  let copy = str;
  let words = [];
  let current = '';
  let indexShift = 0;
  let index = 0

  for(let i = 0; i < copy.length; i++) {
    current += reference.copy[i];
  };


};
  
  
  
  
  

telephoneWords('2745');
// ['APGJ',
// 'APGK',
// 'APGL',
// ..., // many many more of these
// 'CSIL']



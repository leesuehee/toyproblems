let BitwiseTwo = function(strArr) { 
  let string1 = strArr[0].split('');
  let string2 = strArr[1].split('');
  let bitwise2 = [];
  
  for(let i = 0; i < string1.length; i++) {
      if (string1[i] === '1' && string2[i] === '1') {
          bitwise2.push('1');
      } else {
          bitwise2.push('0')
      }
  }
  
  return bitwise2.join('');       
}
   
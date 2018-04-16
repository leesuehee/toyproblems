function EvenPairs(str) { 
  let numbers = str.split(/[^0-9]+/);
  let pairs = numbers.filter(function(string) {
      return string.length > 1;
  });
  
  if (pairs.length < 1) {return false;}
  
  for (let i = 0; i < pairs.length; i++) {
      let check = pairs[i];
      for (let j = 0; j < check.length; j++) {
          if (check.length === 2) {
              if (Number(check[j]) % 2 === 0 && Number(check[j + 1]) % 2 === 0) {
                  return true;
              }
          } else {
              let one1 = check[j];
              let one2 = check.slice(-1);
              let two1 = check.slice(-2);
              let two2 = check.slice(0,2);
              let middle = check[j + 1];
              
              if (Number(one1) % 2 === 0) {
                  if (Number(middle) %  2 === 0 || Number(two1) % 2 === 0) {
                      return true;
                  } else  {
                      return false;
                  }
              } else if (Number(one2) % 2 === 0 ) {
                  if (Number(middle) % 2 === 0 || Number(two2) % 2 === 0) {
                      return true;
                  } else {
                      return false;
                  }
              }
          }
      } 
  }
  
  return false;
}
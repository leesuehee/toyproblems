let GroupTotals = function(strArr) { 
  let output = "";
  let hashTable = {}
  
  for(let i = 0; i < strArr.length; i++) {
    let curr = strArr[i];
    console.log(curr)
    let key = curr.slice(0,curr.indexOf(":") );
    let value = parseInt(curr.slice(curr.indexOf(":")+1, curr.length-1));
    
      
    if (!hashTable[key]) {
      hashTable[key] = value
    } else {
        hashTable[key] += value;
    }
  }
  
  for (let el in hashTable) {
    console.log(el)
    output += `${el}:${hashTable[el]},`;
  }
    
  return output;    
}

let n = GroupTotals(["B:-1", "A:1", "B:3", "A:5"])

console.log(n)
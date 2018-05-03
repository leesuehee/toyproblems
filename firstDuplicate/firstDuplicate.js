let firstDuplicate = (arr)=> {
  let duplicates = [];
  let hashtable = {};
  let index = arr.length;
  
  for (let i = 0; i < arr.length; i++) {
    if (!hashtable[arr[i]]) hashtable[arr[i]]=1;
    else {
      hashtable[arr[i]]++;
    };
  }
  
  for (let num in hashtable) {
    if (hashtable[num] > 2) arr.splice(arr.lastIndexOf(num)); 
    if (hashtable[num] >= 2) duplicates.push(num);
  }

  for (let num of duplicates) {
    let duplicateIndex = arr.lastIndexOf(parseInt(num) );
    if (duplicateIndex < index) index = duplicateIndex;
  };
  
  return (index !== arr.length) ? arr[index] : -1;
}


let AlphabetSearching = function(str) { 
  let alphabet = ('qwertyuiopasdfghjklzxcvbnm').split('');
  let hash = {};
  let letters = Object.keys(hash);
  let check = str.split('');
  
  for (i = 0; i < alphabet.length; i++) {
    if (hash[alphabet[i]] === undefined) hash[alphabet[i]] = 1;
  }
  
  if (letters.length > str.length) return false;
  
  for (let i = 0; i < letters.length; i++) {
    if (check.indexOf(letters[i]) === -1) return false;
  }
  return true;         
}
   
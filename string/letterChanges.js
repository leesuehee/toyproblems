let LetterChanges = function(str) { 
  str = str.replace(/[a-z]/gi, function(letter) {
    if (letter === 'z' || letter === 'Z') return 'a';
    else {
      return String.fromCharCode(letter.charCodeAt() + 1);
    }
  });
  
  str  = str.replace(/[aeiou]/gi, function(vowel) {
    return vowel.toUpperCase();
  });
  
  return str; 
         
}

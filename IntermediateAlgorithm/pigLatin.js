/*
 *Take the first consonant (or consonant cluster) of an English word, 
 *move it to the end of the word and suffixes an "ay".
 *If a word begins with a vowel you just add "way" to the end.
 *Input strings are guaranteed to be English words in all lowercase.
 */
function translatePigLatin(str) {
  if(str.charAt(0) == 'a' || str.charAt(0) == 'e' || str.charAt(0) == 'i' || str.charAt(0) == 'o' || str.charAt(0) == 'u'){
      return str + "way";
    }
  else{
    var result = "";
    for(var i = 0; i < str.length; i++)
    {
      if(str.charAt(i) == 'a' || str.charAt(i) == 'e' || str.charAt(i) == 'i' ||         str.charAt(i) == 'o' || str.charAt(i) == 'u'){
        break;
      }
      else{
        result += str.charAt(i);
      }
    }
    return str.substring(result.length, str.length) + result + "ay";
  }
}

translatePigLatin("glove");
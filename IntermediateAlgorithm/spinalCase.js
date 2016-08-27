/*
 * Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
 */
function spinalCase(str) {
  for(var i = 1; i < str.length; i++){
    if(str[i] == str[i].toUpperCase() && str[i-1] !== " "){
      str = str.substring(0,i) + " " + str.substring(i, str.length);
    }
  }
  str = str.replace(/[\W_]+/g, '-');
  str = str.toLowerCase();
  return str;
}

spinalCase('thisIsSpinalTap');
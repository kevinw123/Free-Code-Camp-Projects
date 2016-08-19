
function findLongestWord(str) {
  var array = str.split(' ');
  var max = 0;
  for(var i = 0; i < array.length; i++){
    max = Math.max(array[i].length,max);
  }
  return max;
}

findLongestWord("May the force be with you");

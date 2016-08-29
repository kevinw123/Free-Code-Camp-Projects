/*
 * Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
 */
function truthCheck(collection, pre) {
  for(var i = 0; i < collection.length; i++){
    if(collection[i].hasOwnProperty(pre) === true && !collection[i][pre]){
      return false;
    }
    else if(collection[i].hasOwnProperty(pre) === false){
      return false;
    }
  }
  return true;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

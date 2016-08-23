/*
 * You will be provided with an initial array (the first argument in the destroyer function), 
 * followed by one or more arguments. 
 * Remove all elements from the initial array that are of the same value as these arguments.
 */
function destroyer(arr) {
  var result = [];
  var bool = false;
  for(var j = 0; j < arr.length; j++){
    bool = false;
    for(var i = 1; i < arguments.length; i++){
      if(arguments[i] === arr[j]){
        bool = true;
      }
    }
    if(bool === false){
      result.push(arr[j]);
    }
  }
  return result;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
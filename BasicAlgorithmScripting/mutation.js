/*
 * Return true if the string in the first element of the array contains 
 * all of the letters of the string in the second element of the array.
 * For example, ["hello", "Hello"], should return true because all of the letters in 
 * the second string are present in the first, ignoring case.
 * The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".
 * Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".
 */
function mutation(arr) {
  var check;
  arr[0] = arr[0].toLowerCase();
  arr[1] = arr[1].toLowerCase();
  
  for(var i =0; i< arr[1].length;i++){
    check = false;
    for(var j = 0; j < arr[0].length; j++){
      if(arr[1].charAt(i) == arr[0].charAt(j)){
        check = true;
      }
    }
    if(check == false){
      return false;
    }
  }
  return true;
  
}

mutation(["hello", "hey"]);

function reverseString(str) {
  var result ="";
  for(var i = str.length; i >= 0 ; i--){
    result += str.substring(i-1,i);
  }
  
  return result;
}

reverseString("hello");

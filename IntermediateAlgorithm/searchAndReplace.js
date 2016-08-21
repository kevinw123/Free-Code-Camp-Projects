function myReplace(str, before, after) {
  if(before.charAt(0).toUpperCase() == before.charAt(0)){
    var result = after.charAt(0).toUpperCase() + after.substring(1,after.length);
    return str.replace(before,result);
  }
  return str.replace(before,after);
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
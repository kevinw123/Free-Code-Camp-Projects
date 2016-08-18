function falsyValues(val){
  if(val != false && val != null && val != 0 && val != "" && val != undefined && val != NaN){
    return val;
  }
}
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  return arr.filter(falsyValues);
}

bouncer([7, "ate", "", false, 9]);
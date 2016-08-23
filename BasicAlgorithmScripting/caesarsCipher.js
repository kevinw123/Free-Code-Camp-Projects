
function rot13(str) { // LBH QVQ VG!
  var value;
  var result = "";
  for(var i = 0; i < str.length; i++){
    value = str.charCodeAt(i);
    if(value >= 65 && value <= 77){
      value += 13;
    }
    else if(value >= 78 && value <= 90){
      value =(13 - (90 - value)) + 64;
    }
    else{
      value = value;
    }
    if(i == 0){
      result = String.fromCharCode(value);
    }
    else{
      result += String.fromCharCode(value);
    }
    
  }
  return result;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");

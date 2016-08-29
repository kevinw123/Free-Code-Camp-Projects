function convertHTML(str) {
  // &colon;&rpar;
  var result = "";
  for(var i = 0; i < str.length; i++){
    if(str.charAt(i) === '"'){
           result += "&quot;";
    }
    else if(str.charAt(i) === "'"){
      result += "&apos;";
    }
    else if(str.charAt(i) === "&"){
        result += "&amp;";
    }
     else if(str.charAt(i) === ">")
    {
      result += "&gt;";
    }
    else if(str.charAt(i) === "<"){
      result += "&lt;";
    }
    else{
      result += str.charAt(i);
    }
  }
  return result;
}
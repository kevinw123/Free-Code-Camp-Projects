
function addTogether() {
  var test = arguments[0];
  for(var i = 0; i < arguments.length; i++){
    if(!Number.isInteger(arguments[i])){
      return undefined;
    }
  }
  if(arguments.length == 1){
    return function add(){
      if(!Number.isInteger(arguments[0])){
        return undefined;
      }
      else{
        return test + arguments[0];
      }
    };
  }
  if(arguments.length == 2){
    return arguments[1] + arguments[0];
  }
}

addTogether(2)([3]);

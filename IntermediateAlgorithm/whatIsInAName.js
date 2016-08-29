
function whatIsInAName(collection, source) {
  // What's in a name?
  var  keys = Object.keys(source);
  var count = 0;
  var arr = [];
  // Only change code below this line
  for(var i = 0; i < collection.length; i++){
      var temp = Object.keys(collection[i]);
      count = 0;
      for(var j = 0; j < temp.length; j++){
        if(source.hasOwnProperty(temp[j]) === true){
          if(collection[i][temp[j]] === source[temp[j]]){
            count++;
          }
        }
      }
      if(count >= keys.length){
          arr.push(collection[i]);
      }
  }
  
  // Only change code above this line
  return arr;
}
whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });

function largestOfFour(arr) {
  // You can do this!
  var resultArray = [];
  for(var i = 0; i < arr.length; i++){
      var max = 0;
      for(var j = 0 ; j< arr.length; j++){
        max = Math.max(arr[i][j],max);
      }
      resultArray.push(max);
  }
  return resultArray;
}

largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

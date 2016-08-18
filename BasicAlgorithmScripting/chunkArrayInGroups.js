function chunkArrayInGroups(arr, size) {
  // Break it up.
  var result = [];
  for(var i = 0; i < arr.length; i+=size){
      var temp = arr.slice(i,i+size);
      result.push(temp);
  }
  return result;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);


function compareNumbers(a, b) {
  return a - b;
}

function getIndexToIns(arr, num) {
  arr.sort(compareNumbers);
  
  if(arr[0] >= num){
    return 0;
  }
  if(arr[arr.length-1] <= num){
    return arr.length;
  }
  
  for(var i = 1; i < arr.length; i++){
    if(arr[i-1] <= num && num <= arr[i]){
      return i;
    }
  }
  return null;
}

getIndexToIns([5, 3, 20, 3], 5);
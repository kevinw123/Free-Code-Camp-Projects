
function sumAll(arr) {
  var sum = 0;
  if(arr[0] < arr[1]){
    while(arr[0] <= arr[1]){
      sum += arr[0];
      arr[0]++;
    }
  }
  else{
    while(arr[1] <= arr[0]){
      sum+= arr[1];
      arr[1]++;
    }
  }
  return sum;
}

sumAll([1, 4]);

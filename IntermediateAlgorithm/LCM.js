function gcd(a,b){
  if(!b){
    return a;
  }
  return gcd(b, a%b);
}

function lcm(a,b){
  return (a * b) / gcd(a,b);
}
function smallestCommons(arr) {
  var start = 0;
  var end = 0;
  if(arr[0] > arr[1]){
    start = arr[1];
    end = arr[0];
  }
  else{
    start = arr[0];
    end = arr[1];
  }
  var result  = start;
  while(start !== end){
    result = lcm(start+1, result);
    start++;
  }
  
  return result;
}


smallestCommons([1,5]);

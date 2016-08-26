/*
 * Sum all the prime numbers up to and including the provided number.
 */
function isPrime(x){     
      d = x-1;
      while (d > 1){
        if ((x % d) == 0) return false;
        d--;
      }
      return true;
 }

function sumPrimes(num) {
  var result = 0;
  for(var i = 2; i <= num; i++){
    if(isPrime(i) === true){
      result += i;
    }
  }
  return result;
}

sumPrimes(10);
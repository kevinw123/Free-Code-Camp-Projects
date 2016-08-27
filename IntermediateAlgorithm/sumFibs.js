/*
 *  Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
 */
function sumFibs(num) {
  var a = 1;
  var b = 1;
  var c = a + b;
  var result = 2;
  while(c < num){
    c = a + b;
    if(c > num){
      break;
    }
    a = b;
    b = c;
    if(c % 2 !== 0){
      result += c;
    }
  }
  return result;
}

sumFibs(4);

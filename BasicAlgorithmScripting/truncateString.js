function truncateString(str, num) {
  // Clear out that junk in your trunk
  if(num <= 3){
        str = str.slice(0,num);
    str += "...";
  }
  else if(str.length > num){
    str = str.substring(0,num-3);
    str += "...";
  }

  return str;
}

truncateString("A-", 1);

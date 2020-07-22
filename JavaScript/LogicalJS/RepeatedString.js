function repeatStringNumTimes(num,str) {
    var repeatedString = "";
    while (num > 0) {
      repeatedString += str;
      num--;
    }
    return repeatedString;
  }
  console.log(repeatStringNumTimes(3,"x"));
  console.log(repeatStringNumTimes(2,"Raubins"));

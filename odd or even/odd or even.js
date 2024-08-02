function checkNumber() {
    var num = document.getElementById("num1").value;
    var result;
  
    if (num % 2 == 0) {
      result = "Even";
    } else {
      result = "Odd";
    }
  
    alert("The number " + num + " is " + result);
  }
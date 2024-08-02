function calculateBmi() {
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);
  
    var bmi = weight / (height * height);
    bmi = bmi.toFixed(2);
  
    var bmiResultMessage = "Your BMI is: " + bmi;
  
    if (bmi < 18.5) {
      bmiResultMessage = bmiResultMessage + " (Underweight)";
    } else if (bmi >= 18.5 && bmi < 25) {
      bmiResultMessage = bmiResultMessage + " (Suitable)";
    } else if (bmi >= 25 && bmi < 30) {
      bmiResultMessage = bmiResultMessage + " (Overweight)";
    } else if (bmi >= 30) {
      bmiResultMessage = bmiResultMessage + " (Obese)";
    }
  
    document.getElementById("bmiResult").innerHTML = bmiResultMessage;
  }
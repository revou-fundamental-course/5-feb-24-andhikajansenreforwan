function convertTemperature() {
    var celsiusInput = document.getElementById("celsius");
    var fahrenheitInput = document.getElementById("fahrenheit");
    var calculationDetailsTextarea = document.getElementById("calculationDetails");
  
    var celsiusValue = parseFloat(celsiusInput.value);
    var fahrenheitValue = parseFloat(fahrenheitInput.value);
  
    if (!isNaN(celsiusValue)) {
      var result = (celsiusValue * 9/5) + 32;
      fahrenheitInput.value = result.toFixed(2);
  
      var calculation = `S(°F) = (${celsiusValue} × 9/5) + 32 = ${result.toFixed(2)}`;
      calculationDetailsTextarea.value = `Cara konversi dari Celsius (°C) ke Fahrenheit (°F)\n\n${calculation}`;
    } else if (!isNaN(fahrenheitValue)) {
      var result = (fahrenheitValue - 32) * 5/9;
      celsiusInput.value = result.toFixed(2);
  
      var calculation = `S(°C) = (${fahrenheitValue} - 32) × 5/9 = ${result.toFixed(2)}`;
      calculationDetailsTextarea.value = `Cara konversi dari Fahrenheit (°F) ke Celsius (°C)\n\n${calculation}`;
    } else {
      alert("Masukkan suhu yang valid.");
    }
  }
  
  function resetFields() {
    document.getElementById("celsius").value = "";
    document.getElementById("fahrenheit").value = "";
    document.getElementById("calculationDetails").value = "";
  }
  
  function reverseFields() {
    var celsiusInput = document.getElementById("celsius");
    var fahrenheitInput = document.getElementById("fahrenheit");
  
    var temp = celsiusInput.value;
    celsiusInput.value = fahrenheitInput.value;
    fahrenheitInput.value = temp;
  
    // Call the reverseCalculation function for reverse temperature calculation
    reverseCalculation();
  }
  
  // Function for reverse temperature calculation from Fahrenheit to Celsius
  function reverseCalculation() {
    var fahrenheitInput = document.getElementById("fahrenheit");
    var celsiusInput = document.getElementById("celsius");
    var calculationDetailsTextarea = document.getElementById("calculationDetails");
  
    var fahrenheitValue = parseFloat(fahrenheitInput.value);
  
    if (!isNaN(fahrenheitValue)) {
      var result = (fahrenheitValue - 32) * 5/9;
      celsiusInput.value = result.toFixed(2);
  
      var calculation = `S (°C)= (${fahrenheitValue} - 32) × 5/9 = ${result.toFixed(2)}`;
      calculationDetailsTextarea.value = `Kalkulasi dari Fahrenheit (°F) ke Celsius (°C)\n\n${calculation}`;
    } else {
      alert("Masukkan suhu Fahrenheit yang valid.");
    }
  }
  
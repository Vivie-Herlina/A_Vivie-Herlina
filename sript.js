function divideNumbers() {
  const numerator = parseFloat(document.getElementById("numerator").value);
  const denominator = parseFloat(document.getElementById("denominator").value);
  const resultElement = document.getElementById("result");

  try {
    if (isNaN(numerator) || isNaN(denominator)) {
      throw new Error("Masukkan angka yang valid.");
    }

    if (numerator === 0 || denominator === 0){
      throw new Error("Pembagian dengan nol tidak diperbolehkan.");
    }

    const result = numerator / denominator;
    resultElement.textContent = `Hasil: ${result}`;
    resultElement.classList.remove("error");
    
  } catch (error) {
    resultElement.textContent = `Error: ${error.message}`;
    resultElement.classList.add("error");
  }
}

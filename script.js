const number_altura = document.getElementById("alt");
const number_peso = document.getElementById("peso");
const calcular = document.getElementById("btnCalcular");
const result = document.getElementById("resp");
const cor = document.querySelector("textarea");

calcular.addEventListener("click", () => {
  operation = parseFloat(number_peso.value) / Math.pow(number_altura.value, 2);
  newOperation = operation.toFixed(2);

  if (number_altura.value == "" || number_peso == "") {
    alert("Por favor, digite as informações necessárias!");
  }

  if (newOperation < 18.5)
    result.value = ` O seu IMC é de : ${newOperation} e você está abaixo do peso!`;
  else if (newOperation >= 18.5 && newOperation <= 24.9)
    result.value = `O seu IMC é de : ${newOperation} e você está com o peso saudável!`;
  else if (newOperation >= 25.0 && newOperation <= 30.0)
    result.value = `O seu IMC é de : ${newOperation} e você está com sobrepeso!`;
  else if (newOperation >= 30.1 && newOperation <= 39.9)
    result.value = `O seu IMC é de : ${newOperation} e você está Obeso!`;
  else if (newOperation > 40.0)
    result.value = `O seu IMC é de : ${newOperation} e você está com Obesidade Morbida!`;

  /*CORES DO RESULTADO DE CADA OPERAÇÃO */

  if (newOperation < 18.5) {
    cor.style.backgroundColor = "yellow";
  } else if (newOperation >= 18.5 && newOperation <= 24.9) {
    cor.style.backgroundColor = "green";
    cor.style.color = "#fff";
  } else if (newOperation >= 25.0 && newOperation <= 30.0) {
    cor.style.backgroundColor = "orange";
    cor.style.color = "black";
  } else if (newOperation >= 30.1 && newOperation <= 39.9) {
    cor.style.backgroundColor = "red";
    cor.style.color = "#fff";
  } else if (newOperation > 40.0) {
    cor.style.backgroundColor = "darkred";
    cor.style.color = "#fff";
  }
});

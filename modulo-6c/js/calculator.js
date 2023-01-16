//constantes
var billsAndCoins = [200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];

var btnCalculate = document.getElementById('calculate-button');
var explicationError = document.getElementById('explication-error');

var calculateChange = (amountPayed, totalPrice) => {
// establecemos var change (pagado - precio del producto)
  var change = amountPayed - totalPrice;
//var cashToReturn objeto vacío
  var cashToReturn = {};

//loop para recorrer billsAndCoins
  for (i in billsAndCoins) {
//avilableCash se iguala a la iteración por billsAndCoins
    var availableCash = billsAndCoins[i];
    //cashAmount con valor 0 dentro del loop
    var cashAmount = 0;
//loop while mientras change sea mayor o igual que availableCash se reduce la iteración por avilableCash
    while (change >= availableCash) {
      change -= availableCash;
      cashAmount++;
    }
    //si cashAmount > 0 cashToReturn itera por availableCash y se iguala a cashAmount
    if (cashAmount > 0) {
      cashToReturn[availableCash] = cashAmount;
    }
  };
  return cashToReturn;
};

calculateChange();

//Función para imprimir el resultado
function finalResult(result) {
  var finalResult = "";
  for (var key in result) {
    //si key está entre 0 y 2 imprimir coins
    if(key >=0 && key <=2) {
    finalResult +="coins of " + key + ": " + result[key] + "<br><br>";
  } //si key es mayor o igual a 5 imprimir bills
  else if (key >=5 ) {
    finalResult +="bills of " + key + ": " + result[key] + "<br><br>";
  }
  }
  document.getElementById("final-result").innerHTML = finalResult;
};

btnCalculate.addEventListener('click', function() {
  //dentro de la función del botón para que coja el valor de los inputs al pulsar btnCalculate
  var total = parseFloat(document.getElementById('total').value);
  var payed = parseFloat(document.getElementById('pay').value);

  //si total o igual menor o igual a 0 mensaje de error
  if (total <= 0 || payed <= 0) {
    explicationError.innerHTML = "Please enter a value for total and payed";
    return;
}

//calculateChange con payed y total
  var printedResult = calculateChange(payed, total);
  //finalResult para imprimir tomando var printedResult
  finalResult(printedResult);
});

// Calculadora Secuencial
// Repite el ejercicio de la calculadora pero esta vez hagamos una calculadora secuencial. Esto es:
// Solo es necesario un único campo numérico.
// Mantén los 4 botones de las 4 operaciones.
// Añade un botón de igual o resultado ( "=" ).
// Una calculadora secuencial funciona del siguiente modo:
// El usuario introduce un primer número.
// Clicka una operación.
// A continuación introduce un segundo número.
// Clicka de nuevo otra operación.
// Y así sucesivamente... hasta que pulsa el botón de resultado.
// Si te fijas, la clave de este algoritmo es ir acumulando el resultado parcial. Para ello, con cada click que el usuario hace en una
// operación, deberás:
// Extraer el operando que hay en el input.
// Actualizar el resultado parcial, que será aplicar la operación anterior guardada, usando como operandos el resultado
// parcial y el nuevo operando.
// Almacenar la operación actual para la siguiente vez.
// NOTA: Gran parte de las funciones que vimos en la calculadora básica podrían servirte aqui también.

//Recoger inputs de la calculadora
var number1 = () => parseInt(document.getElementById("num-1").value);

//Funciones de operaciones
var addition = (n1, n2) => {
  return n1 + n2;
};

var subtraction = (n1, n2) => {
  return n1 - n2;
};

var multiplication = (n1, n2) => {
  return n1 * n2;
};

var division = (n1, n2) => {
  return n1 / n2;
};

//variables para almacenar los resultados
var operator;
var partialResult = 0;

//función para pintar el resultado de la operación en h3
function finalResult(result) {
  document.getElementById("final-result").innerHTML = result;
}

//función para ir limpiar el input una vez empieza a funcionar la calculadora
function printPartialResult() {
    parseInt(document.getElementById("num-1").value = "-");
}

//función para ir mostrando última operación realizada
function getOperations(number1, operator, partialResult) {
    document.getElementById("operations").innerHTML = partialResult + "" + operator + "" + number1();
}


//Eventos
document.getElementById("addition-button").addEventListener("click", function () {
    partialResult = addition(partialResult, number1());
    console.log(partialResult);
    operator = "+";
    printPartialResult();
  });

document.getElementById("subtraction-button").addEventListener("click", function () {
    if (partialResult == 0) {
        partialResult = number1();
    } else {
        partialResult = subtraction (partialResult, number1());
    }
    console.log(partialResult);
    operator = "-";
    printPartialResult();
  });

document.getElementById("division-button").addEventListener("click", function () {
    if (partialResult == 0) {
        partialResult = number1();
    } else {
        partialResult = division (partialResult, number1());
    }
    console.log(partialResult);
    operator = "/";
    printPartialResult();
  });

document.getElementById("multiplication-button").addEventListener("click", function () {
    if (partialResult == 0) {
        partialResult = number1();
    } else {
        partialResult = multiplication (partialResult, number1());
    }
    console.log(partialResult);
    operator = "*";
    printPartialResult();
  });

document.getElementById("result-button").addEventListener("click", function () {
  var result;
  switch (operator) {
    case "+":
      result = addition(partialResult, number1());
      getOperations(number1, operator, partialResult);
      break;
    case "-":
      result = subtraction(partialResult,number1());
      getOperations(number1, operator, partialResult);
      break;
    case "/":
      result = division(partialResult, number1());
      getOperations(number1, operator, partialResult);
      break;
    case "*":
      result = multiplication(partialResult, number1());
      getOperations(number1, operator, partialResult);
      break;
    default:
      result = 0;
  }
  finalResult(result);
});

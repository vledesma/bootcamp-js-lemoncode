// Como primer paso, crea 4 funciones, una para cada una de las 4 operaciones que vamos a impementar: suma, resta, multiplicación y división. Las funciones deberán tomar como entrada dos operando y devolver el resultado de aplicar la operación.
function suma (numero1, numero2) {
    return numero1 + numero2;
};

function resta (numero1, numero2) {
    return numero1 - numero2;
};

function multiplicacion (numero1, numero2) {
    return numero1 * numero2;
};

function divission (numero1, numero2) {
    return numero1 / numero2;
};

// Prueba las funciones simplemente jugando con ellas y mostrando el resultado a traves de la consola.
console.log(multiplicacion(4,5));


//Recoger inputs de la calculadora
var number1 = () => document.getElementById("num-1").value;
var number2 = () => parseInt(document.getElementById("num-2").value);

//Funciones de operaciones
var addition = (n1,n2) => n1 + n2;

var subtraction = (n1, n2) => {
    return n1 - n2;
}

var multiplication = (n1, n2) => {
    return n1 * n2;
}

var division = (n1, n2) => {
    return n1 / n2;
}

//función para pintar el resultado de la operación en h3
function finalResult(result) {
    document.getElementById("final-result").innerHTML = result;
}

//Eventos
document.getElementById("addition-button").addEventListener("click", function() {
    var additionResult = addition(number1(), number2());
    finalResult(additionResult);
    checkNumber();
});

document.getElementById("subtraction-button").addEventListener("click", function() {
    var substactionResult = subtraction(number1(), number2());
    finalResult(substactionResult);
    checkNumber();
});

document.getElementById("division-button").addEventListener("click", function() {
    var divisionResult = division(number1(), number2());
    finalResult(divisionResult);
    checkNumber();
});

document.getElementById("multiplication-button").addEventListener("click", function() {
    var multiplicationResult = multiplication(number1(), number2());
    finalResult(multiplicationResult);
    checkNumber();
});

// Si alguno de los operandos es vacío, muestra como resultado "Error".

function checkNumber () {
    if (isNaN (number1()) || isNaN(number2()))  {
        document.getElementById("final-result").innerHTML = "Error! You have to write numbers in both inputs";
    }
};

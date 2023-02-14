// Validar un IBAN

var IBAN1 = "ES6600190020961234567890"
var IBAN2 = "ES66 0019 0020 9612 3456 7890"

//Caso 1. Dado este IBAN: ES6600190020961234567890 Validar que se informa con dos letras, y los números correspondientes.

var isValidIBAN1 = (iban1) => {
  var isValidCountry = /^[A-Z]{2}/;//validación código de país está entre A-Z
  var isValidLength = /\d{22}$/;//validación longitud es de 22 caracteres
  return isValidCountry.test(iban1) && isValidLength.test(iban1)
}

console.log(isValidIBAN1(IBAN1));

// Caso 2. Vamos a permitir que se incluyan espacios en ciertas áreas, daremos por valida estás dos cadenas:
// ES6600190020961234567890
// ES66 0019 0020 9612 3456 7890

var isValidIBAN2 = (iban2) => {
  var isValidPattern = /^([A-Z]{2}\d{2})(\s?\d{4}){5}$/; //se unifica lo anterior y se añade validación de espacios con \s?
  return isValidPattern.test(iban2);
}

console.log(isValidIBAN2(IBAN1));
console.log(isValidIBAN2(IBAN2));

// Caso 3. Vamos a extraer el código de páis y el dígito de control.
var getCountryAndControl = (iban) => {
  var isValidPattern = /^([A-Z]{2}\d{2})(\s?\d{4}){5}$/;
  var match = iban.match(isValidPattern)
  return [match[1]];
}

console.log(getCountryAndControl(IBAN1));
console.log(getCountryAndControl(IBAN2));

// Validar matrícula coche
// Caso 1. Vamos a validar una matrícula de coche moderna, esta compuesta por 4 digitos y tres letras, patrones a validar:

var plates = ['2021 GMD', '2345-GMD', '4532BDB', '0320-AAA']

var isValidPlate = () => {
  var pattern = /^\d{4}[\s-]?[A-Z]{3}$/;//validación de 4 dígitos, espacios, guiones y 3 letras de A-Z
  for(var validPlate of plates){//bucle para recorrer las validPlates por var plate
    console.log(`Plate ${validPlate} is valid:`,pattern.test(validPlate))
  }
};

isValidPlate();

// Caso 2. Vamos a extraer por un lado la parte numérica y por otro las letras.

var extractPlateParts = (plates) => {
  var plateNumbers = [];
  var plateLetters = [];

  for(var plate of plates) {
    //parte numérica de la placa
    var plateNumber = plate.match(/\d+/)[0];
    plateNumbers.push(plateNumber);

    // Extraer parte de letras de la placa
    var plateLetter = plate.match(/[A-Za-z]+/)[0];
    plateLetters.push(plateLetter);

    console.log(plateNumber + ", " + plateLetter);
  }
}

extractPlateParts(plates);

//Opcionales:

// Caso 1. De una sola linea extraer el contenido de src:

var img1 = '<img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/>';

var imgUrl = img1.match(/src=["|'](.*?)["|']/)[1];

console.log(imgUrl);

// Caso 2. De un HTML extraer todos los src de todos los objetos img:

var getImageSources =() => {
  var pattern = /<img.*?src=["|'](.*?)["|'].*?>/g;
  var html = document.body.innerHTML;
  var match;

  while ((match = pattern.exec(html)) !== null) {
    console.log(match[1]);
  }
}

getImageSources();

// Validar sintaxis tarjeta de crédito.

//Caso 1. Vamos a validar los siguiente formatos (todos válidos)

var creditCards = ['5299 6400 0000 0000', '5299-6400-0000-0000', '5299640000000000'];

var validateCreditCard = (cards) => {
  var validationOfCards = (card) => {
    //validación número de tarjeta comience con un número entre 50-55, seguido de dos dígitos. que tenga 16 dígitos en total, agrupados en 4 aceptando espacios o guiones.
    var pattern =  /^5[0-5]\d{2}(\s|-)?\d{4}(\s|-)?\d{4}(\s|-)?\d{4}$/;
    return pattern.test(card);//pasamos test
  }

  for (var card of cards) {
    console.log(`${card}: ${validationOfCards(card)}`);
  }
};

validateCreditCard(creditCards);

var extractCreditCardParts = (cards) => {
  var parts = [];

  for(var card of cards) {
    var extractedPart = card.match(/\d{4}/g);
    parts.push(extractedPart);

    console.log(extractedPart);
  }
};

extractCreditCardParts(creditCards);


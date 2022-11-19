// Para calcular el coste de la estancia ten en cuenta lo siguiente:

// La tarifa de la habitación por noche es de 100€ para categoría Standard, 120€ Junior Suite y 150€ Suite.
// El uso del SPA incrementa la tarifa anterior en 20€.
// Una vez tengas la tarifa en función de la categoría y el SPA, la ocupación (individual o triple) actúa como un factor de decremento o incremento, siendo la opción de doble el estándar. Es decir, el uso individual reduce un 25% la tarifa por noche, mientras que el uso triple la incrementa en un 25%. El uso doble la deja tal cual.
// Cada noche de parking suma 10€.
// Un ejemplo de estancia sería:
// 5 noches x Hab. Estándar con SPA de uso individual + 2 noches de parking. En este caso la tarifa por noche sería: (100€ noche + 20€ spa) al 75% por uso individual = 90€/noche x 5 noches = 450€ + (10€ parking x 2 noches) = 470€ TOTAL.

// variables globales por defecto a 0, 1 o valor básico
var priceOfRoom = 0;
var priceOfRoomWithSpa = 0;
var numberGuestsRoom = "double";
var priceParkingNights = 10;
var roomTotalPrice = 0;
var totalNights = 1;
var totalParkingNights = 0;

// get elements by ID para sacar los valores
var typeOfRoom = document.getElementById("room-select");
var spaSelected = document.getElementById("spa-check");
var guestsForRoom = document.getElementById("guest-select");
var getNumberNights = document.getElementById("nights_num");
var getParkingNights = document.getElementById("parking_num");


//función para sacar el nº de noches por defecto a 1
function priceNumberNights () {
  getNumberNights.addEventListener("change", function () {
    totalNights = getNumberNights.value;
    amountToPay(calculateTotalPrice(roomTotalPrice)); //función que pinta el resultado en el h3 con id="operations-hotel"
  })
}

//función para sacar el nº de noches de parking, es opcional no tiene por defecto
function parkingNumberNights () {
  getParkingNights.addEventListener("change", function () {
    totalParkingNights = getParkingNights.value;
    amountToPay(calculateTotalPrice(roomTotalPrice)); //función que pinta el resultado en el h3 con id="operations-hotel"
  })
}

//función para modificar el precio de la habitación en función del tipo (standard, jr suite o suite)
function priceTypeOfRoom() {
  typeOfRoom.addEventListener("change", function () {
    if (typeOfRoom.value == "standard") {
      priceOfRoom = 100;
    } else if (typeOfRoom.value == "jr_suite") {
      priceOfRoom = 120;
    } else if (typeOfRoom.value == "suite") {
      priceOfRoom = 150;
    }
    amountToPay(calculateTotalPrice(roomTotalPrice)); //función que pinta el resultado en el h3 con id="operations-hotel"
  });
}

//función para sacar si la reserva tiene SPA o NO SPA
function priceSpaSelected() {
  spaSelected.addEventListener("change", function () {
    if (spaSelected.checked) {
      priceOfRoomWithSpa = 20;
    } else {
      priceOfRoomWithSpa = 0;
    }
    amountToPay(calculateTotalPrice(roomTotalPrice)); //función que pinta el resultado en el h3 con id="operations-hotel"
  });
}

//función para sacar valores del select del nº de invitados (individual, doble o triple)
function priceGuestForRoom() {
  guestsForRoom.addEventListener("change", function () {
    if (guestsForRoom.value == "single") {
        numberGuestsRoom = "single";
    } else if (guestsForRoom.value == "double") {
        numberGuestsRoom = "double";
    } else if (guestsForRoom.value == "triple") {
        numberGuestsRoom = "triple";
    }
    amountToPay(calculateTotalPrice(roomTotalPrice)); //función que pinta el resultado en el h3 con id="operations-hotel"
  });
}

//función para calcular el precio total de la habitación en función de si es individual, doble o triple
function calculateTotalPrice (roomTotalPrice) {
  roomTotalPrice = priceOfRoom + priceOfRoomWithSpa;//precio de la habitación con o sin spa
  switch (numberGuestsRoom) {//switch para sumar o añadir, default doble en variable global
    case "single":
      roomTotalPrice = roomTotalPrice - (roomTotalPrice * 0.25);
      break;
    case "triple":
      roomTotalPrice = roomTotalPrice + (roomTotalPrice * 0.25);
      break;
    default:
      roomTotalPrice;
  }
  roomTotalPrice = roomTotalPrice * totalNights;//calculando nº de noches
  roomTotalPrice = roomTotalPrice + (totalParkingNights * priceParkingNights);//nº de noches + noches de parking
  return roomTotalPrice;
}

//invocación de las funciones anteriores
priceGuestForRoom();
priceTypeOfRoom();
priceSpaSelected();
parkingNumberNights ();
priceNumberNights ();

//función que pinta el resultado en el h3 con id="operations-hotel"
function amountToPay(result) {
  document.getElementById("operations-hotel").innerHTML = result;
}

//función del botón Calcular se añade en cada una de las funciones anteriores para ir pintando los resultados
document.getElementById("calculate-button").addEventListener("click", function () {
    amountToPay(calculateTotalPrice(roomTotalPrice));//pinta el resultado obtenido de calculateTotalPrice
  });
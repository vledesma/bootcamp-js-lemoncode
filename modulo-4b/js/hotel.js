// Para calcular el coste de la estancia ten en cuenta lo siguiente:

// La tarifa de la habitación por noche es de 100€ para categoría Standard, 120€ Junior Suite y 150€ Suite.
// El uso del SPA incrementa la tarifa anterior en 20€.
// Una vez tengas la tarifa en función de la categoría y el SPA, la ocupación (individual o triple) actúa como un factor de decremento o incremento, siendo la opción de doble el estándar. Es decir, el uso individual reduce un 25% la tarifa por noche, mientras que el uso triple la incrementa en un 25%. El uso doble la deja tal cual.
// Cada noche de parking suma 10€.
// Un ejemplo de estancia sería:
// 5 noches x Hab. Estándar con SPA de uso individual + 2 noches de parking. En este caso la tarifa por noche sería: (100€ noche + 20€ spa) al 75% por uso individual = 90€/noche x 5 noches = 450€ + (10€ parking x 2 noches) = 470€ TOTAL.

var priceOfRoom = 0;
var priceOfRoomWithSpa = 0;
var numberGuestsRoom;
var priceParkingNights = 10;

var typeOfRoom = document.getElementById("room-select");
var spaSelected = document.getElementById("spa-check");
var guestsForRoom = document.getElementById("guest-select");

function priceTypeOfRoom() {
  typeOfRoom.addEventListener("change", function () {
    if (typeOfRoom.value == "standard") {
      priceOfRoom = 100;
    } else if (typeOfRoom.value == "jr_suite") {
      priceOfRoom = 120;
    } else if (typeOfRoom.value == "suite") {
      priceOfRoom = 150;
    }
  });
}

function priceSpaSelected() {
  spaSelected.addEventListener("change", function () {
    if (spaSelected.checked) {
      priceOfRoomWithSpa = 20;
    } else {
      priceOfRoomWithSpa = 0;
    }
  });
}

function priceGuestForRoom() {
  guestsForRoom.addEventListener("change", function () {
    if (guestsForRoom.value == "single") {
        numberGuestsRoom = "single";
    } else if (guestsForRoom.value == "double") {
        numberGuestsRoom = "double";
    } else if (guestsForRoom.value == "triple") {
        numberGuestsRoom = "triple";
    }
  });
}

var numberNights = () => document.getElementById("nights_num").value;
var parkingNights = () => document.getElementById("parking_num").value;

function calculateTotalPrice (roomTotalPrice) {
  roomTotalPrice = priceOfRoom + priceOfRoomWithSpa;
  switch (numberGuestsRoom) {
    case "single":
      roomTotalPrice = roomTotalPrice - (roomTotalPrice * 0.25);
      break;
    case "triple":
      roomTotalPrice = roomTotalPrice + (roomTotalPrice * 0.25);
      break;
    default:
      roomTotalPrice;
  }
  roomTotalPrice = roomTotalPrice * numberNights();//calculando nº de noches
  roomTotalPrice = roomTotalPrice + (parkingNights() * priceParkingNights);//nº de noches + noches de parking
  return roomTotalPrice;
}

priceGuestForRoom();
priceTypeOfRoom();
priceSpaSelected();

function amountToPay(result) {
  document.getElementById("operations-hotel").innerHTML = result;
}

document.getElementById("calculate-button").addEventListener("click", function () {
    var roomTotalPrice = 0;
    amountToPay(calculateTotalPrice(roomTotalPrice));
  });
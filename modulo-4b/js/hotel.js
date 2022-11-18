// Para calcular el coste de la estancia ten en cuenta lo siguiente:

// La tarifa de la habitación por noche es de 100€ para categoría Standard, 120€ Junior Suite y 150€ Suite.
// El uso del SPA incrementa la tarifa anterior en 20€.
// Una vez tengas la tarifa en función de la categoría y el SPA, la ocupación (individual o triple) actúa como un factor de decremento o incremento, siendo la opción de doble el estándar. Es decir, el uso individual reduce un 25% la tarifa por noche, mientras que el uso triple la incrementa en un 25%. El uso doble la deja tal cual.
// Cada noche de parking suma 10€.


//Defino precio habitación
var priceOfRoom;
var typeOfRoom = document.getElementById("room-select");

function priceTypeOfRoom () {
    typeOfRoom.addEventListener("change", function() {
      if (typeOfRoom.value == "standard") {
            priceOfRoom = 100;
          }else if (typeOfRoom.value == "jr_suite") {
            priceOfRoom = 120;
          } else if (typeOfRoom.value == "suite") {
            priceOfRoom = 150;
          }
          console.log(priceOfRoom);
          return priceOfRoom;
        });
  };

console.log("cl de la función que no funciona porque no le sale de los cojones " + priceTypeOfRoom());

// Captación del check de spa
var priceOfSpa;
var spaSelected = document.getElementById("spa-check");
spaSelected.addEventListener("change", function () {
  if(spaSelected.checked) {
    priceOfSpa = 20;
  } else {
    priceOfSpa = 0;
  }
  console.log(priceOfSpa);
  return priceOfSpa
});

var guestsForRoom = document.getElementById("guest-select");
//obtengo precio por tipo habitación
guestsForRoom.addEventListener("change", function() {
  if (guestsForRoom.value == "single") {
        priceOfRoom = priceOfRoom - (priceOfRoom*0.25);
      }else if (guestsForRoom.value == "double") {
        priceOfRoom = priceOfRoom;
      } else if (guestsForRoom.value == "triple") {
        priceOfRoom = priceOfRoom + (priceOfRoom*0.25);
      }
      console.log(priceOfRoom);
      return priceOfRoom;
    });

function amountToPay(result) {
  document.getElementById("operations").innerHTML = result;
}

document.getElementById("calculate-button").addEventListener("click", function () {;
  amountToPay(priceOfRoom);
  console.log(amountToPay());
});



// };


// Una vez tengas la tarifa en función de la categoría y el SPA, la ocupación (individual o triple) actúa como un factor de decremento o incremento, siendo la opción de doble el estándar. Es decir, el uso individual reduce un 25% la tarifa por noche, mientras que el uso triple la incrementa en un 25%. El uso doble la deja tal cual.
// var priceOfRoom;
// function myFunction () {
// var a = document.getElementById("room-select");
// var typeOfRoom = a.selectedIndex;
// if (typeOfRoom.value == "standard") {
//   priceOfRoom= 100;
// }else if (typeOfRoom.value == "jr_suite") {
//   priceOfRoom = 120;
// } else if (typeOfRoom.value == "suite") {
//   priceOfRoom = 150;
// };
// return priceOfRoom;
// console.log(priceOfRoom);
// }
// TypeOfRoom capta precio del primer select y se añade precio con evento
// var priceTypeOfRoom= () =>typeOfRoom.addEventListener("click", function() {
//   if (typeOfRoom.value == "standard") {
//     priceOfRoom= 100;
//   }else if (typeOfRoom.value == "jr_suite") {
//     priceOfRoom = 120;
//   } else if (typeOfRoom.value == "suite") {
//     priceOfRoom = 150;
//   }
//   console.log(typeOfRoom);
//   return priceOfRoom;
// });

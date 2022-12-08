const cart = [
  {
  id: 198752,
  name: "Tinta DJ27 Color",
  price: 52.95,
  count: 3,
  premium: true
  },
  {
  id: 75621,
  name: "Impresora ticketera PRO-201",
  price: 32.75,
  count: 2,
  premium: true
  },
  {
  id: 54657,
  name: "Caja de rollos de papel para ticketera",
  price: 5.95,
  count: 3,
  premium: false
  },
  {
  id: 3143,
  name: "Caja de folios DIN-A4 80gr",
  price: 9.95,
  count: 2,
  premium: false
  }
];

// ------1.Mostrar una estructura de carrito de la compra.
// 1.Listar todos los productos con for simple

// for (i=0; i< cart.length; i++) {
//   viewCartList(cart[i]);
// }

// function viewCartList(product) {
//   console.log("----ID " + product.id + "------");
//   console.log("Name: " + product.name);
//   console.log("Price per product: " + product.price);
//   console.log("Count: " + product.count);
//   console.log("Premium: " + product.premium);
//   console.log("Total price: " + product.count * product.price);
// }

// 1. Listar todos los productos con for of

for (product of cart) {
  viewCartList(product)
}

// function viewCartList(product) {
//   console.log("----ID " + product.id + "------");
//   console.log("Name: " + product.name);
//   console.log("Price per product: " + product.price);
//   console.log("Count: " + product.count);
//   console.log("Premium: " + product.premium);
//   console.log("Total price: " + product.count * product.price);
// }

// Simplificación de la función
function viewCartList(product) {
  console.log("--------");
    for (features in product) {
      console.log(features + ": " + product[features]);
    }
}


// ------2. Eliminar un producto del carrito de la compra.

var deleteFirstProduct = cart.shift();
console.log(deleteFirstProduct);
console.log(cart);

//--volvemos a añadir el elemento

var addFirstProduct = cart.unshift(
  {
  id: 198752,
  name: "Tinta DJ27 Color",
  price: 52.95,
  count: 3,
  premium: true
  },
  )

  console.log(cart);

// ------3. Calcular el total del carrito de la compra (ojo aquí truco multiplicar cantidad por valor).

let totalCartPrice = 0;

for (product of cart) {
  totalCartPrice += product.price * product.count;
}

console.log("Total price of cart: " + totalCartPrice + "€");


// ------4. Filtrar por los productos que sean premium.

for (product of cart) {
  if (product.premium) viewPremium(product);
}

function viewPremium(product) {
  console.log("--------This is a Premium Product");
    for (features in product) {
      console.log(features + ": " + product[features]);
    }
}

// Opcional

// ------5. Si todos los productos son prime que diga "Gastos de envió cero", si no "Con gastos de envío.
function checkPremium () {
  if (product.premium) {
    alert("Gastos de envío 0")
  } else {
    alert("Con gastos de envío")
  }
}
checkPremium();
// ------6. Montarlo con HTML y API de HTML básica. (de esto tendríamos que haber hecho un ejemplo en la parte de dojo / kata). Ver index

for (i=0; i< cart.length; i++) {
  printProducts( cart[i]);
}

function printProducts() {
  document.getElementById("products").innerHTML += " id: " + cart[i].id + "<br>" + " Name: "+ cart[i].name + "<br>" + " Price: "+ cart[i].price + "<br>" + " Count: "+ cart[i].count + "<br>" + " Premium: "+ cart[i].premium + "<br>"+ "<br>" + "-----------" + "<br>" + "<br>" ;
}

// ------7. Aplicar un descuento del 5% si la compra es mayor de 50 €

function discountForCart () {
  if (totalCartPrice > 50) {
    totalCartPrice = totalCartPrice - (totalCartPrice *0.05)
  };
}

discountForCart();
console.log(totalCartPrice);


// Constantes.
const REGULAR_TYPE = 21;
const LOWER_TYPE = 4;
const EXEMPT_TYPE = 0;

// Entrada.
const products = [
  {
    description: "Goma de borrar",
    price: 0.25,
    tax: LOWER_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: "Lápiz H2",
    price: 0.4,
    tax: LOWER_TYPE,
    stock: 5,
    units: 0,
  },
  {
    description: "Cinta rotular",
    price: 9.3,
    tax: REGULAR_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: "Papelera plástico",
    price: 2.75,
    tax: REGULAR_TYPE,
    stock: 5,
    units: 0,
  },
  {
    description: "Escuadra",
    price: 8.4,
    tax: REGULAR_TYPE,
    stock: 3,
    units: 0,
  },
  {
    description: "Pizarra blanca",
    price: 5.95,
    tax: REGULAR_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: "Afilador",
    price: 1.2,
    tax: LOWER_TYPE,
    stock: 10,
    units: 0,
  },
  {
    description: "Libro ABC",
    price: 19,
    tax: EXEMPT_TYPE,
    stock: 2,
    units: 0,
  },
];

// 1.HTML Dinámico
// var para el botón y el container de precios se ocultan ambos bloques con inputs 0 por activateButton ()
var calcButton = document.getElementById("btn");
var containerButton = document.getElementById("button-price-container");

//Print description --> función para imprimir los atributos de los productos del array
var printProducts = (productList) => {
  //loop para tomar cada uno de los elementos del array como productos
  for (var product of productList) {
    getProduct(product); //imprime los productos del array
  }
  calcButton.disabled = activateButton();
};

//función para crear los productos y sus características
var getProduct = (product) => {
  //creación de un div para englobar descripción + precio + input (cantidad del producto)
  var productItem = document.createElement("div");
  productItem.setAttribute("class", "flex-container");

  //creación de h5 para tomar la descripción + precio del producto
  var productDescription = document.createElement("h5");
  productDescription.innerText =product.description + " - " + product.price + "€";

  //creación de input para cantidad de productos
  var input = document.createElement("input");
  input.setAttribute("type", "number");// creación de input de type number
  input.setAttribute("value", product.units); // por defecto input a 0
  input.setAttribute("id", "total-items"); //ID para identificar input
  input.setAttribute("min", 0); //min productos posibles 0
  input.setAttribute("max", product.stock); //max productos posible stocks
  input.addEventListener(
    "change",(event) => {
      product.units = Number(event.target.valueAsNumber);//guarda el change del input y lo convierte en nº (valueAsNumber)
      calcButton.disabled = activateButton();
  });

  //container para agregar div + description + input en el HTML
  var container = document.getElementById("product-list-container");
  container.appendChild(productItem).appendChild(productDescription).appendChild(input);
};

//2. Prepara un algoritmo que calcule la factura cuando pulsemos el botón calcular y muestre el resultado en los campos subtotal, impuestos y total.

// FUNCIONES para Precios

//variables para seleccionar elementos de precios
var subtotalText = document.getElementById("subtotal");
var ivaText = document.getElementById("total-taxes");
var totalText = document.getElementById("total-cart");

//funcion para calular precio item * producto y nº
var getItemCost = (product) => {
  var itemCost = product.price * product.units;
  return itemCost;
};

//funcion para calular precio IVA
var getIVA = (productList) => {
  var iva = 0;
  for (var product of productList) {
    iva += getItemCost(product) * (product.tax / 100)
  }
  return iva;
};

//funcion para calular subtotal
var getSubtotal = (productList) => {
  var subtotal = 0;
  for (var product of productList) {
    subtotal += getItemCost(product)
  };
  return subtotal;
};

//funcion para calular coste total
var getTotalCost = (productList) => getSubtotal(productList) + getIVA(productList);

//funcion para Imprimir productos
var printPrice = (productList) => {
  subtotalText.innerHTML = getSubtotal(productList).toFixed(2);
  ivaText.innerHTML = getIVA(productList).toFixed(2);
  totalText.innerHTML = getTotalCost(productList).toFixed(2);
}

//Botón calcular, controlador y función de activación
calcButton.addEventListener("click", () => {
  printPrice(products);
})

//Intenta hacer que el botón Calcular se habilite o deshabilite en función de si el usuario ha elegido al menos 1 unidad de algún producto o no.
//Se añade o se quita hidden al bloque de container del botón de precio y el bloque de precios

function activateButton () {
  for (var product of products) {
    if (product.units > 0) {
      return containerButton.classList.remove("hide-button");
    }
  };
  return containerButton.classList.add("hide-button");;
};

//invocación de funciones
printProducts(products);





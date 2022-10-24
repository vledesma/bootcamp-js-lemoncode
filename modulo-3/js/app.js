// calcular el total de la compra de un producto (su precio multiplicado por la cantidad) y aplicar el IVA del 21% excepto para los siguientes tipos de producto:
// "alimentacion": 10%
// "libro": 4%

const product = {
    count: 6,
    price: 10,
    type: "libros",
};

let priceWithoutIVA;

if (product.count > 0) {
    priceWithoutIVA = product.count * product.price;
} else {
    priceWithoutIVA = 0
};

console.log("Precio sin IVA:", priceWithoutIVA + "€");

let typeIVA;

switch (product.type) {
    case "alimentacion":
        typeIVA = 0.1;
    break;
    case "libro":
        typeIVA = 0.04
    break;
    default:
        typeIVA = 0.21
};

let iva = priceWithoutIVA * typeIVA;

console.log("Precio del IVA:",iva + "€");

let priceWithIVA = priceWithoutIVA + iva;

console.log("Precio con IVA:", priceWithIVA + "€");

// ## Ejercicio 2 - Calcular precio total
// Vamos a crear una función getTotal que acepta por parámetro el producto, y devuelva el precio total:

function getTotal() {
    if (product.count > 0) {
        return product.count * product.price;
    } else {
        return 0;
    };
};

let priceNoIVA = getTotal();
console.log("Precio sin IVA obtenido por función:", priceNoIVA);

// Vamos a crear una función getVat que recibe el producto y calcula el IVA (por unidad) aplicable dependiendo del tipo de producto:

let tipoIVA;

switch (product.type) {
    case "alimentacion":
        tipoIVA = 0.1;
    break;
    case "libro":
        tipoIVA = 0.04
    break;
    default:
        tipoIVA = 0.21
};

function getVat() {
    return priceNoIVA * tipoIVA
};
let priceOfIVa = getVat();
console.log("Precio del IVA obtenido por función:", priceOfIVa);

function globalPrice() {
    return priceNoIVA + priceOfIVa
}
let totalPrice = globalPrice();
console.log("Precio con IVA obtenido por función:", totalPrice);

// Utilizando la función anterior, crearemos una para calcular el total de IVA (IVA por unidad multiplicado por cantidad):

function getTotalVat(product) {
    return product.count > 0 ? product.count * getVat(product) : 0;
  }

function printProductPrice(product) {
const subtotal = getTotal(product);
const vat = getTotalVat(product);
const total = subtotal + vat;

console.log("Subtotal:", subtotal + "€");
console.log("IVA:", vat + "€");
console.log("Total:", total + "€");
}

let finalCount = printProductPrice(6);

// Vamos a hacer una simulación de calculo de sueldo neto en nómina (este escenario es simplificado, desafío buscar legislación).
// Partimos de:
// Sueldo bruto año. Número de hijos. Número de pagas. Tenemos la siguiente estrcutura:

const empleado = {
    bruto: 100000,
    hijos: 2,
    pagas: 14,
}

let retencionesAplicadas;

  if (empleado.bruto < 12500) {
    retencionesAplicadas = 0;
  } else if (empleado.bruto < 24000) {
    retencionesAplicadas = empleado.bruto * 0.08;
  } else if (empleado.bruto < 34000) {
    retencionesAplicadas = empleado.bruto * 0.16;
  } else if (empleado.bruto > 34000) {
    retencionesAplicadas = empleado.bruto * 0.3;
  }

  console.log("Inicialmente, se aplica una retención de:",retencionesAplicadas);

// Adicionalmente:
// Si el empleado tiene hijos, restarle a la retencion 2 puntos. Con esto sacaríamos el neto anual en nómina.

let retencionesAplicadasconHijo;

if (empleado.bruto < 12500) {
    retencionesAplicadasconHijo = 0;
  } else if (empleado.bruto < 24000 && empleado.hijos > 0) {
    retencionesAplicadasconHijo = empleado.bruto * (0.08 - 0.02);
  } else if (empleado.bruto < 34000 && empleado.hijos > 0) {
    retencionesAplicadasconHijo = empleado.bruto * (0.16 - 0.02);
  } else if (empleado.bruto > 34000 && empleado.hijos > 0) {
    retencionesAplicadasconHijo = empleado.bruto * (0.3 - 0.02);
  }

console.log("Debido a los hijos, se aplica una retención de:",retencionesAplicadasconHijo);

let salarioNeto = empleado.bruto - retencionesAplicadasconHijo;

console.log("Salario neto de:",salarioNeto);

// Siguiente paso, sacar el neto mensual (si es catorce pagas dividir por catorce, si no por 12)

let salarioNetoMensual;

if (empleado.pagas == 12) {
    salarioNetoMensual = salarioNeto / 12;
} else if (empleado.pagas == 14) {
    salarioNetoMensual = salarioNeto / 14;
}

console.log("Salario neto mensual de:",salarioNetoMensual + " distribuido en ", empleado.pagas + " pagas");


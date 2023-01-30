// Funciones básicas

console.log("------ FUNCIONES BÁSICAS ------");
//// 1. Implementa una función que muestre por consola “Hola Mundo”.
var showConsole = () => console.log("Hola Mundo");

showConsole();

//// 2. Implementa una función que admita como parámetro un nombre y salude por consola a dicha persona.
var greetings = name => console.log("Hello " + name);

console.log(greetings('Paco'));

//// 3. Implementa una función que dado un string como parámetro devuelva el string en mayúsculas.
var mayus = texto => texto.toUpperCase();

console.log(mayus('minusculas a mayusculas'));

//// 4. Implementa una función que dado un string como parámetro devuelva el string en minúsculas.
var minus = texto => texto.toLowerCase();

console.log(mayus('MAYUS A MINUS'));

//// 5. Implementa una función que admita 2 números como parámetro y devuelva la suma de ambos.
var suma = (a, b) => {
    return a + b;
}

//También vale var suma = (a,b) => a + b;

console.log(suma(6, 4));

//// 6. Implementa una función que admita 3 argumentos de tipo string y devuelva otro string con la concatenación de los 3.
var concatenate = (string1, string2, string3) => {
    return string1 + ' ' + string2 + ' ' + string3;
}

console.log(concatenate('tres tristes', 'tigres', 'comían trigo en un trigal'));

//// 7. Implementa una función que admita como parámetro un objeto y añada a dicho objeto una propiedad llamada ‘id’ inicializada a null. Se crea una función para añadir propiedades a objetos:
var addParameter = (obj, propName, value) => {
    obj[propName]= value;
}

//Se define objeto
var myObject = {
    name:'Paco',
    age:'35',
};

//se invoca a la función y se añaden atributo id con valor null
addParameter(myObject, 'id', null);

console.log(myObject);

//Otra opción de hacerlo, ambas maneras permiten hacer código reusable y más seguro creando una función más genérica evitamos cambiar el código de la función

var person = {
    name:'Paco 2',
    age: '55'
};

var addToMyObject = (obj) => {
    obj.id = null
};

addToMyObject(person);

console.log(person);

// Funciones con if/else, switches y comprobaciones

console.log("------ FUNCIONES IF/ELSE, SWITCHES Y COMPROBACIONES ------");

//// 1. Implementa una función que admita un parámetro, de cualquier tipo, y que compruebe si el parámetro es undefined o null .
var isNullOrUndefined = (x) => {
    if (x === null || x === undefined) {
        return true;
    } else {
        return false;
    }
};

isNullOrUndefined();
console.log(isNullOrUndefined());

// Ternario ? true :false no es necesario al ser una expresión booleana por si misma:

var isNullTernary = a => (a === null || a === undefined) ? true : false;

isNullTernary();

console.log(isNullTernary());

// // 2. Implementa una función que admita un número como parámetro y devuelva si el número es positivo o negativo.
var typeNumber = (num) => {
    if (isNaN(num)) {
        return num + ' it`s not a number' + "------"
    }
    else if (num >= 0) {
        return num + ' it`s positive' + "-----"
    } else {
        return num + ' its negative';
    }
};

console.log(typeNumber(5), typeNumber(-45), typeNumber('asdfasdf'));

//// 3. Implementa una función que admita un número como parámetro y diga, por consola, si es mayor que 100, menor que 100 o exactamente 100.
var checkNumber100 = (num) => {
    if (isNaN(num)) {
        return num + ' its not a number' + '------'
    } else if (num < 100) {
        return num + ' its lower than 100' + '------';
    } else if (num > 100) {
        return num + ' its higher than 100' + '------';
    } else {
        return num + ' its 100' + '------';
    }
}

checkNumber100();

console.log(checkNumber100('asdasd'), checkNumber100(54), checkNumber100 (101), checkNumber100(100));

// // 4. Implementa una función que admita como parámetro un objeto y devuelva si dicho objeto tiene una propiedad ‘name’ o no.

var user= {
    surname:'Pérez',
    hair: 'pink',
    age: 35
};
// The hasOwnProperty() method returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it).
var objectHasName = (obj) => {
    if(obj.hasOwnProperty('name')) {
        return obj;
    } else {
        return 'Object doesnt have that property'
    }
};

console.log(objectHasName(user));

// // 5. Implementa una función que admita 2 números como argumento y compruebe si el primero es divisible por el segundo.

var isDivisible = (num1, num2) => {
    if(num1 / num2 === 0){
        return false;
    } else {
        return true;
    }
};

//var isDivisible = (n1, n2) => (n1 / n2 === 0);

console.log(isDivisible(0,5));

// // 6. Implementa una función que admita 2 números como argumento y compruebe si el primero es divisible por el segundo.
var checkCharNumber = (str, num) => {
    if (str.length === num) {
        return num + ' vs ' + str + ': the sentence has the same number of characters';
    } else {
        return num + ' vs ' + str + ': the sentence doesnt have the same number of characters';
    }
}

console.log(checkCharNumber('paco', 4));

// // 7. Implementa una función que admita un día de la semana en formato número (del 1 al 7) y devuelva que día de la semana es (en texto).
var checkWeekDay = (day) => {
    switch (day) {
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        case 7:
            return "Sunday";
        default:
            return "Not a week day"
    }
};

console.log(checkWeekDay(5));

// // 8. Implementa un función que dado un número (del 1 al 12), diga a qué mes corresponde en texto.
var checkMonth = (month) => {
    switch (month) {
        case 1:
            return 'January';

        case 2:
            return 'Feb';

        case 3:
            return 'March';

        case 4:
            return 'April';

        case 5:
            return 'May';

        case 6:
            return 'June';

        case 7:
            return 'July';

        case 8:
            return 'August';

        case 9:
            return 'Sept';

        case 10:
            return 'Oct';

        case 11:
            return 'Nov';

        case 12:
            return 'Dec'

        default:
            return 'Not a month'
    }
 };

console.log(checkMonth(5));

// // 9. Implementa una función que admita 2 arrays como argumento, y devuelva el array más largo.
    var arrLong = [44, 23, 18, 0, 32];
    var arrShort = ["a", "b", "d"];

    var checkArrayLength = (arr1, arr2) => {
        if (arr1.length > arr2.length) {
            return arr1 + ' has ' + arr1.length + ' elements, so is longer than second'
        } else if (arr1.length < arr2.length) {
            return arr2 + ' has ' + arr2.length +' elements, so is longer than second'
        }
    }
console.log(checkArrayLength(arrLong, arrShort));

// // 10. Implementa una función que admita 2 arrays como argumento, y devuelva si el primer elemento de ambos arrays es igual o no.
    var arrayFirstPositionEqual = (arr1, arr2) => {
        if(Array.isArray(arr1) && Array.isArray(arr2) && arr1[0] === arr2[0]) {
            console.log('First element in both arrays is the same');
        } else {
            console.log('First element in both arrays is not the same');
        }
    }

arrayFirstPositionEqual(arrShort, arrLong);

// //11.Implementa una función que admita 2 arrays como argumento, y devuelva si el primer elemento de ambos arrays es igual o no.

// Funciones con arrays
console.log("------ FUNCIONES CON ARRAYS ------");

// // 1. Implementa una función que admita un array de números, y devuelva el segundo elemento, y en caso de no existir, devuelva ‘undefined’ .
var arrayExample = [1, 2]

var isArrayNum = arr => {
    if(arr.length > 1) {
        return arr[1]
    } else {
        return undefined
    }
};

console.log(isArrayNum(arrayExample));

// // // 2. Implementa una función que admita un string como parámetro y devuelva la última letra.
var textString = "Manolo Gonzalex y Paco Lamasxdefaf"

var getLastLetter = (str) => {
    var lastLetter = str.length - 1;
    return str[lastLetter]
};

console.log(getLastLetter(textString));

// // // 3. Implementa una función que dado un array, intercambie el primer elemento por el último. Muestra por consola el resultado.

var arrayElements = [15,22,33,44,55,66,58,99,120]

var swapElementsInArray = arr => {
    var element1 = arr[0];
    var lastIndex = arr.length-1;
    arr[0] = arr[lastIndex];
    arr[lastIndex]= element1;
    console.log(arr);
};

console.log(arrayElements);
swapElementsInArray(arrayElements);

// // Funciones con bucles
console.log("------ FUNCIONES CON BUCLES ------");

// // 1. Implementa una función que admita 2 parámetros, un número y un texto, y que muestre por consola dicho texto tantas veces como indique el número.
var repeat = (text, n) => {
    for(var i = 0; i < n; i++) {
        console.log(i, text);
    }
};

repeat ('Hola qué tal', 3);

// // // 2. Implementa una función que admita como parámetro un objeto cualquiera y devuelva el número de propiedades que tiene el objeto.
var numProps = obj => {
    var result = 0;
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) result++;
    }
    return result;
}

var arrayPaco = {
    name: 'Paco',
    age: 45,
    hair: 'bold'
}

console.log(numProps(arrayPaco));

// // // 3. Implementa una función que admita como parámetro un objeto y muestre por consola los valores de sus propiedades.
var showProperty = obj => {
    for (prop in obj) {
        console.log(obj[prop]);
    }
}

console.log(showProperty(arrayPaco));

// // // 4. Implementa una función que admita un array de números y otro parámetro que sea un número y sume cada elemento del array multiplicado por dicho número. Devuelve el resultado.
var multiplyArray = (arr, num) => {
    var result = 0;
    for (var item of arr) {
        result += item * num;
    }
    return result
};

let arr1 = [1, 1, 1];

console.log(multiplyArray(arr1, 5));

// // // 5. Implementa una función que dado un string como parámetro y también un carácter, devuelva cuantas veces aparece dicho carácter en el string.
var searchInStr = (str, char) => {
    var count = 0;

    for (var i = 0; i < str.length; i++) {
        if (str[i] === char) count++;
        }
    return count;
}

var str1 = "amanece que no es poco";

console.log(searchInStr(str1, "a"));
console.log(searchInStr(str1, "o"));

// // // 6. Implementa una función que dado un array de cualquier tipo, lo recorra del primer al último elemento, mostrando cada elemento por consola.
var showArrayElements = arr => {
    for (var item of arr) {
        console.log(item);
    }
};

showArrayElements(str1);

// // // 7. Implementa una función que dado un array de números, y otro parámetro que sea un número, diga cuantos elementos son menores a dicho número, y cuántos no.
var numStats = (arr, num) => {
    var result = [0, 0, 0];//menor, igual, mayor [0, 1 , 2]
    for (var item of arr) {
        if (item === num) result[1]++;
        else if (item < num) result[0]++;
        else result[2];
    }
    return result;
}

console.log(numStats([2, 4, -1, 6], 4));

// // 8. Implementa una función que admita 2 arrays como argumento, y diga si el elemento del primero, se encuentra en el segundo.
var anyInCommon = (arr1, arr2) => {
    for (var a of arr1) {
        for (var b of arr2) {
            if (a === b) return true;
        }
    }
    return false;
}
console.log(anyInCommon([1,2,3], [0,5,3]));

// // // 9. Implementa una función que admita 2 arrays como argumento, y intercambia los elementos del primero en el segundo y viceversa. Muestra los arrays transformados por consola.
var swparArrays = (arr1, arr2) => {
    var i = 0;
    while (i < arr1.length && i < arr2.length) {
        var tmp = arr1[i];
        arr1[i] = arr2[i];
        arr2[i] = tmp;
        i++;
    }
    console.log(arr1, arr2);
}

swparArrays([1,2], ['a', 'b'])

// // // 10. Implementa una función que admita un array como argumento, y construya un objeto en el que almacene cada uno de los elementos del array en propiedades indexadas, del tipo ‘prop1’, ‘prop2’, ‘prop3’, etc.
var objectFromArray = arr => {
    var result = {};
    for (var i =0; i< arr.length; i++) {
        var propName = "prop" + i;
        result[propName] = arr[i];
    }
    return result;
}

console.log(objectFromArray(['hola', 'adios', 'venga', 'taluego']));

// // 11. Implementa una función que admita un array y un número, y empieza a recorrer dicho array por el número dado. Muestra por consola cada elemento por el que iteres.
var iterateArrayFrom = (arr, startIndex) => {
    if (startIndex< arr.length && startIndex >= 0) {
        for(var i= startIndex; i< arr.length; i++) {
            console.log(arr[i]);
        }
    }
};

iterateArrayFrom(['uno', 'dos', 'tres', 'cuatro'], 1)

// // 12. Implementa una función que dado un array de strings y otro parámetro como string diga si existe en el array.
var search = (arr, target) => {
    for (var item of arr) {
        if(item === target) return true;
    }
    return false
};

console.log(search([1, 2, 3, 4], 5));

// // 13. Implementa un array que contenga nombres de frutas en Español y otro array con las mismas frutas en el mismo orden pero en ingles. Implementa una función de traducción, que dada una fruta en español, diga la traducción en Inglés, y otra función equivalente que haga la traducción inversa.

var fEN = ['apple', 'orange', 'banana'];
var fEs = ['manzana', 'naranja', 'plátano'];

var translateFruiToEs = fruit => {
    var index = fEN.indexOf(fruit);
    if (index > -1) {
        return fEs[index]
    } else {
        return 'NO encontrado'
    }
};

console.log(translateFruiToEs('peach'));

// // 14. Implementa una función que admita un texto por parámetro y lo devuelva por consola al revés.
var swhowReverse = text => {
    var result= "";
    for (var i= text.length - 1; i >= 0; i--) {
        result += text[i]
    };
    console.log(result);
    }

swhowReverse ('amazing these');
// // 15. Implementa una función que admita un texto por parámetro y lo devuelva en formato ‘EsTe Es Mi TeXtO’.
var capitalizeLetters = text => {
    var result = "";
    for (var i = 0; i < text.length; i++) {
        result += i % 2 === 0 ? text[i].toUpperCase() : text [i];
    }
    return result;
};

console.log(capitalizeLetters('ouh yeah beibe'));

// // 16. Implementa una función que admita como parámetro un array de arrays. La función debe recorrer todos los elementos de cada subarray y mostrarlos por consola.
var iterateSubItems = arr => {
    for (var subArr of arr) {
        for (var item of subArr) {
        console.log(item);
    }
    }
};
var myArr = [[1,2], ['inicio', 'fin'], 'hola'];
iterateSubItems(myArr);
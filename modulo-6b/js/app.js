//Enigma
//constantes alfabeto
var plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";
var encryptedMessage ="b': yqg ,:agr(hue:) shrerg jq,u'qf q !hg ,:psqñrf:g rg,fuwurae: s:f r' ,yq!x mbg:z 'q 'r,yrn !hfua( t'usqfuq ,:apu(:)m z q ,:a!uahq,u:a rajuq ha pragqir ,utfqe:n br' dhr !h dhurfqg)";

//constantes HTML
var textArea1 = document.getElementById("cryptedMessage");
var textArea2 = document.getElementById("encryptedMessage");
var cryptButton = document.getElementById("encryptButton");
var decryptButton = document.getElementById("decryptButton");

//función directa para traducir var encryptedMessage

function decrypt (encryptedText, encryptedAlphabet, plainAlphabet) {
  var result = "";
  var letter;
  for (let i in encryptedText){
    letter = encryptedText[i];
    for (let j in encryptedAlphabet){
      if (encryptedText[i] == encryptedAlphabet[j]){
        letter = plainAlphabet[j]
        continue;
        //con continue se para la iteración en el caso de que se encuentre la letra en encryptedText y en encryptedAlphabet y se mueve a la siguiente iteración
      }
    }
    result += letter;
}
    return result
};

console.log(decrypt(encryptedMessage, encryptedAlphabet, plainAlphabet));


//Funciones por botón con IndexOf

var decrypt = (text) => {
  var text = textArea2.value; //valor TextArea2
  var lowerCase = text.toLowerCase(); //transformación todo a minus
  var result = ""; //variable result se establece como varia vacio
  for (letter of lowerCase) {
    //loop recorriendo letras de textArea2
    if (plainAlphabet.indexOf(letter) == -1) {
      //si no se encuentra la letra en el array (===-1), se añade espacio
      result += letter;
    } else {
      result += plainAlphabet[encryptedAlphabet.indexOf(letter)];
    }
  }
  return (textArea1.value = result); //return en textArea 1 de la iteración por encryptedAlphabet
};

var encrypt = (text) => {
  var text = textArea1.value; //valor TextArea1
  var lowerCase = text.toLowerCase(); //transformación todo a minus
  var result = ""; //variable result se establece como varia vacio
  for (letter of lowerCase) {
    //loop recorriendo letras de textArea1
    if (encryptedAlphabet.indexOf(letter) == -1) {
      //si no se encuentra la letra en el array (===-1), se añade espacio
      result += letter;
    } else {
      result += encryptedAlphabet[plainAlphabet.indexOf(letter)];
    }
  }
  return (textArea2.value = result);
};

cryptButton.addEventListener("click", encrypt);
decryptButton.addEventListener("click", decrypt);

//Generador Aleatorio
//Vamos a construir un generador aleatorio que permita escoger, de forma aleatoria, una cantidad determinada de números de entre un mínimo y un máximo.

var randomPick = (n, min, max) => {
  var randomNums = [];
  var num;

  while (randomNums.length < n) {//mientras que el length del array vacío sea menor que n generamos num aleatorio entre min y max
    num = Math.floor(Math.random() * (max - min + 1)) + min;
    if (randomNums.indexOf(num) == -1) { //comprueba que num no está en randomNums (==-1) y se añade al array con push
      randomNums.push(num);
    }
  }
  return randomNums;
}

console.log(randomPick(10, 1, 100));

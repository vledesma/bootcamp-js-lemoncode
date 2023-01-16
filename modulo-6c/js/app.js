// Constantes
var WORK_HOURS = [
  "08:00 - 09:00",
  "09:00 - 10:00",
  "10:00 - 11:00",
  "11:00 - 12:00",
  "12:00 - 13:00",
  "13:00 - 14:00",
  "15:00 - 16:00",
  "16:00 - 17:00",
];

// Datos
var myTeam = [
  {
    name: "María",
    availability: new Array(8).fill(true),
  },
  {
    name: "Pedro",
    availability: new Array(8).fill(true),
  },
  {
    name: "Esther",
    availability: new Array(8).fill(true),
  },
  {
    name: "Marcos",
    availability: new Array(8).fill(true),
  },
];

// La disponibilidad de cada miembro (availability) se ha modelado como un array de 8 posiciones (8 franjas horarias en total) que por defecto se ha inicializado a true para todas las franjas horarias. Es decir, inicialmente, todos los miembros están disponibles todas las horas.

//Generación aleatoria de disponibilidad
var randomAvailability = () => {
  //Recorrido por los members de my Team
  for (var member in myTeam) {
    //Dentro del loop variable memberAvailability de cada member de myTeam
    var memberAvailability = myTeam[member].availability;
    //loop dentro del loop de member in myTeam para crear disponibilidad individual de cada member => hourAvailability < myTeam[member].availability.length (8 por defecto)
    for (
      var hourAvailability = 0;
      hourAvailability < memberAvailability.length;
      hourAvailability++
    ) {
      //con Math.random() < 0.5 asignamos a hourAvailability valor booleano true or false a la length de disponibilidad de cada miembro (8)
      memberAvailability[hourAvailability] = Math.random() < 0.5;
    }
  }
};

//Función para imprimir
var printAvailability = () => {
  for (var member in myTeam) {
    //Dentro del loop variable memberAvailability de cada member de myTeam
    var memberAvailability = myTeam[member].availability;
    //Impresión de cada nombre
    console.log("Disponibilidad de " + myTeam[member].name);
    for (
      var hourAvailability = 0;
      hourAvailability < memberAvailability.length;
      hourAvailability++
    ) {
      //Impresión de var hourAvailability para cada member sacada de var WORK_HOURS y asignación de "Sí" o "No" ternario
      console.log(
        WORK_HOURS[hourAvailability] +
          ": " +
          (memberAvailability[hourAvailability] ? "Sí" : "No")
      );
    }
  }
};

// Buscar hueco libre
// Para buscar el primer hueco libre habrá que comprobar la primera franja horaria en la que todos los miembros del equipo están disponibles.

var findCommonGap = () => {
  //variable commonAvailability a true por defecto
  var commonAvailability = true;
  //Primer bucle para recorrer las horas del equipo en conjunto (myTeam[0].availability.length)
  for (let hour = 0; hour < myTeam[0].availability.length; hour++) {
    //Hay que volver a definir commonAvailability como verdadero
    commonAvailability = true;
    //Bucle para recorrer cada uno de los miembros del equipo
    for (let member = 0; member < myTeam.length; member++) {
      //Si los miembros del equipo no tienen disponibilidad de horas commonAvailability pasa a false y break para parar el bucle
      if (!myTeam[member].availability[hour]) {
        commonAvailability = false;
        break;
      }
    }//fin del segundo bucle
    //Si todos los miembros del equipo tienen disponibilidad después de los dos bucles se imprime mensaje con return para finalizar la el bucle
    if (commonAvailability) {
      console.log(`Hueco encontrado para todos los miembros del equipo a las ${WORK_HOURS[hour]}`
      );
      return;
    }
  }//fin del primer bucle
  //Si commonAvailability es false(!) impresión del mensaje
  if (!commonAvailability) {
    console.log('Lo siento. No hay hueco disponible para una reunión entre todos los miembros del equipo.');
  }
};

//invocación de las funciones
randomAvailability();
printAvailability();
findCommonGap();

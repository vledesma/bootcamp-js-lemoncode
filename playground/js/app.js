// var nameHotel = prompt("Introduce el nombre del hotel");

// document.getElementById("hotel-name").innerHTML = "Hotel " + nameHotel;

// var locationHotel = prompt("Introduce la ubicación del hotel");
// document.getElementById("hotel-location").innerHTML = locationHotel;

// var hotel = {
//     name: "",
//     location: "",
//     description: "",
// };

// hotel.name = prompt("Introduce el nombre del hotel");
// document.getElementById("hotel-name").innerHTML = "Hotel " + hotel.name

// hotel.location = prompt ("Introduce la ubicación del hotel");
// document.getElementById("hotel-location").innerHTML = hotel.location;

// hotel.description = prompt("¿Cómo es este hotel¿?")
// document.getElementById("hotel-description").innerHTML = hotel.description;

// console.log(hotel);

//Otra manera de plantearlo

// var hotel = {
//     name: "",
//     location: "",
//     description: "",
// };

// hotel["name"] = prompt("Nombre del hotel");
// document.getElementById("hotel-name").innerHTML = "Hotel " + hotel["name"];

// hotel["location"] = prompt("localización del hotel");
// document.getElementById("hotel-location").innerHTML = hotel["location"];

// hotel["description"] = prompt("Descripción del hotel");
// document.getElementById("hotel-description").innerHTML = hotel["description"];

// //operadores
// const user1 = {
//     name: "john"
// };

// const user2={
//     name: "john"
// };
// console.log(user1 === user2);//false
// console.log(user1.name === user2.name);//true, tiene en cuenta el contenido

// const a = 5;
// const esMayorQue5 = a > 5; // esMayorQue5 tendrá valor false
// const esMayorOIgualA5 = a >= 5; // esMayorOIgualA5 tendrá valor true
// const esMenorQue5 = (a - 1) < 5; // esMenorQue5 tendrá valor true;
// const esMenorOIgualA5 = a <= 5; // esMenorOIgualA5 tendrá valor true;

const booking = {
    count: 5,
    price: 127.95
};

let total = booking.count * booking.price;



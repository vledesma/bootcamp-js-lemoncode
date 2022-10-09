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

var hotel = {
    name: "",
    location: "",
    description: "",
};

hotel["name"] = prompt("Nombre del hotel");
document.getElementById("hotel-name").innerHTML = "Hotel " + hotel["name"];

hotel["location"] = prompt("localización del hotel");
document.getElementById("hotel-location").innerHTML = hotel["location"];

hotel["description"] = prompt("Descripción del hotel");
document.getElementById("hotel-description").innerHTML = hotel["description"];
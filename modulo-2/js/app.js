//Ejercicio 1. Crear un HTML sencillo donde los siguientes campos sean completados mediante JavaScript:
// Nombre del hotel.
// Ubicación del hotel.
// Imagen del hotel (puede ser mediante URL).

// var nameHotel = "Villa Padierna";
// var locationHotel = "Benahavís";
// var imgHotel ="https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_627,q_auto,w_1200/itemimages/40/06/40061_v9.jpeg";

// document.getElementById("name-hotel").innerHTML = "Hotel " + nameHotel;
// document.getElementById("location-hotel").innerHTML = "Ubicado en " + locationHotel;
// document.getElementById("img-hotel").src = imgHotel;

// // Puntuación del hotel

// var rating = prompt("Puntúa el hotel del 1 al 5");
// document.getElementById("rating").innerHTML = "Tu votación es de " + rating + " estrella/s &#9733;";

// // Pregunta anónimo
// var anonymous = confirm("¿Quiere que su reseña sea anónima?");
// document.getElementById("anonymous").checked = anonymous;

//Ejercicio opcional con varios hoteles

var hoteles = {
    Padierna: {
        name: "Villa Padierna",
        location: "Benahavís",
        img: "https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_627,q_auto,w_1200/itemimages/40/06/40061_v9.jpeg",
    },
    Carlos: {
        name: "Don Carlos",
        location: "Marbella",
        img: "https://s3.abcstatics.com/media/andalucia/2020/07/29/s/hotel-doncarlos-marbella-U21836884517Udj-620x349@abc.jpg",
    },

    Kempinski: {
        name: "Kempinski Bahía",
        location: "Estepona",
        img: "https://media.kempinski.com/1028/kempinski-hotel-bahia_marbella-estepona_2013.jpg;autorotate=true;quality=90;scale=both;progressive=true;encoder=freeimage",
    },
};

//Preguntar el hotel sobre el que se quiere opiniar y aportar datos
var hotelSelect = prompt ("¿Qué hotel quieres puntuar: Padierna, Carlos o Kempinski?");

document.getElementById("name-hotel").innerHTML = "Hotel " + hoteles[hotelSelect].name;
document.getElementById("location-hotel").innerHTML = "Ubicado en " + hoteles[hotelSelect].location;
document.getElementById("img-hotel").src = hoteles[hotelSelect].img;

//Rating en estrellas del hotel

var rating = prompt("¿Cuántas estrellas le das al hotel: una, dos, tres, cuatro o cinco?");

var vote = {
    una : "<span>&#9733;</span>",
    dos : "<span>&#9733;</span><span>&#9733;</span>",
    tres: "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>",
    cuatro: "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>",
    cinco: "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>",
};

document.getElementById("rating").innerHTML = vote[rating];

//Pregunta anónimo

var anonymous = confirm("¿Quiere que su reseña sea anónima?");
document.getElementById("anonymous").checked = anonymous;


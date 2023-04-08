//import axios
import axios from "axios";

//import styles
import "./styles.css";

//import functions from utils.js
import { createCharacterRow, showCharacter } from "./utils.js";

const API_BASE_URL = "https://rickandmortyapi.com/api";

//elementos de index.html y alamacenados para print
const rootElement = document.getElementById("root");
const characterDetailElement = document.getElementById("character-detail");

function getCharacters() {
  return axios
    .get(`${API_BASE_URL}/character`)
    .then(response => response.data.results)
    .catch(error => {
      console.error(error);
      throw error;
    });
}

function renderCharacters(characters) {
  rootElement.innerHTML = "";
  characters.forEach((character) => {
    const rowElement = createCharacterRow(character);
    rowElement.addEventListener("click", () => {
      showCharacter(character);
    });
    rootElement.appendChild(rowElement);
  });
}

//llamada a getCharacters y a renderCharacters esperando la respuesta para mostrar los personajes. si hay error mensaje de consola.
function init() {
  getCharacters()
    .then(characters => renderCharacters(characters))
    .catch(error => console.log("Something went wrogn"));
}

init();
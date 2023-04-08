import axios from "axios";
import "./styles.css";
import { createCharacterRow, showCharacter } from "./utils.js";

const API_BASE_URL = "https://rickandmortyapi.com/api";

const rootElement = document.getElementById("root");
const characterDetailElement = document.getElementById("character-detail");

async function getCharacters() {
  try {
    const response = await axios.get(`${API_BASE_URL}/character`);
    const characters = response.data.results;
    return characters;
  } catch (error) {
    console.error(error);
  }
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

async function init() {
  const characters = await getCharacters();
  renderCharacters(characters);
}

init();
import axios from "axios";

const BASE_URL = "https://rickandmortyapi.com/api";

//getAllCharacters devuelve un array de los personajes
const getAllCharacters = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/character`);
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
};


//devuelve información sobre un personaje específico dado su ID.
const getCharacterById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/character/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};


//exportacion de archivos
export { getAllCharacters, getCharacterById };
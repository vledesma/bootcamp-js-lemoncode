import axios from "axios";

const BASE_URL = "https://rickandmortyapi.com/api";

const getAllCharacters = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/character`);
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
};

const getCharacterById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/character/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export { getAllCharacters, getCharacterById };
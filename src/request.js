/* EXAMPLE OF REST-API CONNECTION */
import axios from "axios";

const baseURL = process.env.BASE_URL;

const ax = axios.create({baseURL});

/* AUTHORIZATION */

//Login and password authorization
export const signInByLP = async (login, password) => {
  const response = ax.post('/authorization', {
    login,
    password,
  });
  return response;
};

//Refresh token authorization
export const signInByRT = async refresh_token => {
  const response = await ax.post('/authorization/refresh', {
    refresh_token,
  });
  return response;
};

//Example of a request to get a list of items

//payload contains variables for filtering

export const getItemsList = async () => {
  let response;
  try {
    response = await ax.get('items.json');
  } catch {
    throw new Error('Items loading failed');
  }
  return response.data;
};

//Server side emulation
export const createItem = async () => {
  return true;
};
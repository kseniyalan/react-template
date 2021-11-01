/* EXAMPLE OF REST-API CONNECTION */
import axios from "axios";
//import qs from "qs";
import config from "./config";

let domain;
if (process.env.NODE_ENV === 'development') {
  domain = config.devHost;
} else {
  domain = config.prodHost;
}

export const baseURL = domain + config.prefix;
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

export const getItemsList = async (token, payload) => {
  /*
  const queryString = qs.stringify(payload, {indices: false});
  const response = await ax.get('/items?' + queryString, {
    headers: {token}
  });
  */
  //Server side emulation
  const response = [
    {id: 0, name: 'Item 1', color: 'Yellow'},
    {id: 1, name: 'Item 2', color: 'Green'},
  ]
  return response;
};

//Server side emulation
export const createItem = async () => {
  return true;
};
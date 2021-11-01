import moment from "moment";
import jwt from "jsonwebtoken";

//HERE ARE SOME USEFUL METHODS WHICH YOU CAN USE IN ANY COMPONENT


//FOR AUTHORIZATION
export const getTokensFromLocalStorage = () => {
  const tokens = {
    accessToken: localStorage.getItem("accessToken"),
    refreshToken: localStorage.getItem("refreshToken"),
  }
  return tokens;
}

//Saving tokens in LocalStorage
export const setTokensInLocalStorage = (accessToken, refreshToken) => {
  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("refreshToken", refreshToken);
  return true;
};

//Checking the validity of a token
export const checkToken = (token) => {
  const now = new Date();
  //The lifetime of the token is stored in the token itself
  const tokenData = jwt.decode(token);
  const tokenValidUntil = tokenData && tokenData.valid_through;
  //Checking the token lifetime
  const tokenIsValid = moment(tokenValidUntil).isAfter(now);
  if (tokenIsValid) return true;
  return false;
};

//SERVICE METHODS
//Setting the correct word endings when specifying the number of items
export const getWordEnding = (n, text_forms) => {
  n = Math.abs(n) % 100; var n1 = n % 10;
  if (n > 10 && n < 20) { return text_forms[2]; }
  if (n1 > 1 && n1 < 5) { return text_forms[1]; }
  if (n1 === 1) { return text_forms[0]; }
  return text_forms[2];
};

//Example
getWordEnding(22, ['strom', 'stromy', 'stromov']);

//Phone number validation
//In this example phone number format is like +7 906 123-45-67
export const validatePhone = phone => {
  const pattern = /^\+?[7][-(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/;
  return pattern.test(phone);
};

//Phone number appearance (10 digits)
//Will bring the phone number string format 79061234567 to the format 7 906 123-45-67
export const formatPhone = phone => {
  var tt = phone.split('');
  tt.splice(1,'', ' ');
  tt.splice(5,'', " ");
  tt.splice(9,'', '-');
  tt.splice(12,'', '-');

  //First digit
  let newPhone = tt.join('');
  if ((parseInt(tt[0], 10)) === 7) newPhone = `+${newPhone}`;
  return newPhone;
};
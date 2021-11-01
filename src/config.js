//Formation of url for redirect after authorization and for APIs connecting
const host = window.location.host;
const protocol = window.location.protocol;
const url = protocol + '//' + host;

export default {
  devHost: 'https://somedevhost.com',
  prodHost: process.env.REACT_APP_BASE || url,
  base: process.env.REACT_APP_BASE || url,
  prefix: "/api",
  url: url,
};

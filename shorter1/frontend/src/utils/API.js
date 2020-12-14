import axios from "axios";
const headers = {
  "Content-Type": "application/json"
};
const burl = "http://localhost:8800";

export default {
  login: function(email, password) {
    return axios.post(
      `${burl}/user/login`,
      {
        email,
        password
      },
      {
        headers: headers
      }
    );
  },
  signup: function(send) {
    return axios.post(`${burl}/user/signup`, send, { headers: headers });
  },

  numberUser: function(send) {
    return axios.post(`${burl}/user/numberUser`, send, { headers: headers });
  },

  lastUser: function(send) {
    return axios.post(`${burl}/user/lastUser`, send, { headers: headers });
  },

  addProduct: function(send) {
    return axios.post(`${burl}/product/addProduct`, send, { headers: headers });
  },

  numberProduct: function(send) {
    return axios.post(`${burl}/product/numberProduct`, send, { headers: headers });
  },

  removeProduct: function(send) {
    return axios.post(`${burl}/product/removeProduct`, send, { headers: headers });
  },

  avgDistance: function(send) {
    return axios.post(`${burl}/product/avgDistance`, send, { headers: headers });
  },

  numberPerCategory: function(send) {
    return axios.post(`${burl}/product/numberPerCategory`, send, { headers: headers });
  },

  addTime: function(send) {
    return axios.post(`${burl}/time/addTime`, send, { headers: headers });
  },

  getTime: function(send) {
    return axios.post(`${burl}/time/getTime`, send, { headers: headers });
  },

  updateTime: function(send) {
    return axios.post(`${burl}/time/updateTime`, send, { headers: headers });
  },

  isAuth: function() {
    return localStorage.getItem("token") !== null;
  },
  logout: function() {
    localStorage.clear();
  }
};
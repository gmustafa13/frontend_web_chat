/** @format */

const axios = require("axios");
const baseUrl = "http://localhost:3000";
var sucessObj = {
  data: null,
  statusCode: 200,
  massage: "",
};
var errorObj = {
  error: null,
  statusCode: 204,
  massage: "",
};

const service = {
  saveData: async (url, formData) => {
    return await axios({
      method: "post",
      data: formData,
      url: baseUrl + `${url}`,
      headers: {
        "content-type": "application/json",
      },
    })
      .then((result) => {
        (sucessObj.data = result), (sucessObj.massage = "sucessful save Data");
        return sucessObj;
      })
      .catch((e) => {
        errorObj.error = e;
        errorObj.massage = e.massage;
        return errorObj;
      });
  },
  login: async (url, formData) => {
    return await axios({
      method: "post",
      data: formData,
      url: baseUrl + `${url}`,
      headers: {
        "content-type": "application/json",
      },
    })
      .then((result) => {
        (sucessObj.data = result), (sucessObj.massage = "sucessful save Data");
        return sucessObj;
      })
      .catch((e) => {
        errorObj.error = e;
        errorObj.massage = e.massage;
        return errorObj;
      });
  },
  getDataWithParams: async (url, formData) => {
    return await axios({
      method: "get",
      data: formData,
      url: baseUrl + `${url}`,
      headers: {
        "content-type": "application/json",
      },
    })
      .then((result) => {
        (sucessObj.data = result), (sucessObj.massage = "sucessful save Data");
        return sucessObj;
      })
      .catch((e) => {
        errorObj.error = e;
        errorObj.massage = e.massage;
        return errorObj;
      });
  },
  getDataWithoutParams: async (url) => {
    return await axios({
      method: "get",
      url: baseUrl + `${url}`,
      headers: {
        "content-type": "application/json",
      },
    })
      .then((result) => {
        (sucessObj.data = result), (sucessObj.massage = "sucessful save Data");
        return sucessObj;
      })
      .catch((e) => {
        errorObj.error = e;
        errorObj.massage = e.massage;
        return errorObj;
      });
  },
};
export default service;

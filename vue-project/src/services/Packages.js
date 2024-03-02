import axios from "axios";

let API_URL = "http://localhost:8080/api/package/";

const getPackages = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {}
};

const getPackage = async (id) => {
  try {
    const response = await axios.get(API_URL + id);
    console.log(response.data)
    return response.data;
  } catch (error) {}
};

export default {
  getPackages,
  getPackage,
};

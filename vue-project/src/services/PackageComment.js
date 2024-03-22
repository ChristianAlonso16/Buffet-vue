import axios from "axios";

let API_URL = "http://localhost:8080/api/packageHasComment/";

const getReviews = async (packageName) => {
  try {
    const response = await axios.get(API_URL + packageName);
    return response.data;
  } catch (error) {}
};

export default {
  getReviews,
};

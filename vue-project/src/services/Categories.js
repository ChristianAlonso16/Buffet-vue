import axios from "axios";

let url = "http://localhost:8080/api/category";

const getCategories = async () => {
  try {
    const response = await axios.get(url + "/");
    if(!response){
      throw new Error();
  }
    return response.data;
  } catch (error) {}
};
const registerCategory = async (name) => {
  try {
    const response = await axios.post(url + "/addCategory", {
      categoryName: name,
    });
    if(!response){
      throw new Error();
  }
    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data.message;
    }
  }
};
export default {
  getCategories,
  registerCategory,
};

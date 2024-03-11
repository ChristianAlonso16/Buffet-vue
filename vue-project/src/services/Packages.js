import axios from "axios";

let API_URL = "http://localhost:8080/api/package/";

const getPackages = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    return  error;
  }
};

const getPackage = async (id) => {
  try {
    const response = await axios.get(API_URL + id);
    return response.data;
  } catch (error) {}
};

const updatePackage=async(pkg)=>{
  try {
    const response = await axios.put(API_URL+'update',{
      ...pkg
    })
    console.log("service",response.message);
    return response.data
  } catch (error) {
    return error
  }
}

const  addPackage = async (pkg) => {
  try {
    const response = await axios.post(API_URL+'register',{...pkg});
    return response.data;
  } catch (error) {
    return error;
  }
}

const validateSizeDescriptionPackage=(description)=>{
  if(description.length<=300){
    return true;
  }else{
    return false;
  }
}

const changeStatus= async (name,st)=>{
const status=st==='enable'? 'disabled':'enable';
try {
  const response = await axios.put(API_URL+'updateStatus',{name,status});
  return response;
} catch (error) {
  return error;
}
}



export default {
  getPackages,
  getPackage,
  updatePackage,
  addPackage,
  validateSizeDescriptionPackage,
  changeStatus
};

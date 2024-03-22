import axios from 'axios';

let url = 'http://localhost:8080/api/userAccount';

const getClients = async () => {
   try {
      const response = await axios.get(url+"/getClients");
      return response.data;
   } catch (error) {
   }
};
const getWorkers = async () => {
   try {
      const response = await axios.get(url+"/getWorkers");
      return response.data;
   } catch (error) {
   }
};
const updateStatus = async (email,currentStatus) => {
   try {

      const response = await axios.put(url+"/updateStatus",{
            name:email,
      status:currentStatus
   });
      console.log(response);
      return response.data;
   } catch (error) {
      console.log(error);
   }
}
export default{
   getClients,getWorkers,updateStatus
}
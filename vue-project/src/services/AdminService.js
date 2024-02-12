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
export default{
   getClients,getWorkers
}
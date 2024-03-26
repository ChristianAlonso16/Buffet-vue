import axios from 'axios';

let url = 'http://localhost:8080/api/userAccount';

const getClients = async () => {
   try {
      const response = await axios.get(url+"/getClients");
      if(!response){
            throw new Error();
        }
      return response.data;
   } catch (error) {
   }
};
const updateStatusUser = async (email,currentStatus) => {
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
   getClients,updateStatusUser
}
import axios from 'axios';

let url = 'http://localhost:8080/api/worker';


const getWorkers = async () => {
   try {
      const response = await axios.get(url+"/getWorkers");
      if(!response){
        throw new Error();
    }
      return response.data;
   } catch (error) {
   }
};
const addWorker = async (email, password, name, lastname, surname,phone) =>{
    try{
        const response = await axios.post(url+"/registerWorker",{
            email: email,
            password: password,
            name: name,
            lastname: lastname,
            surname: surname,
            phone:phone
        })
        if(!response){
            throw new Error();
        }
        return response.data;
    }catch(error){
        throw error;
    }
}
const updateStatusWorker = async (numWorker,currentStatus) => {
    try {
 
       const response = await axios.put(url+"/updateStatus",{
             name:numWorker,
       status:currentStatus
    });
       console.log(response);
       return response.data;
    } catch (error) {
       console.log(error);
    }
 }
export default{
   getWorkers,addWorker,updateStatusWorker
}
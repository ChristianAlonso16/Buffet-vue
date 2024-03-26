import axios from 'axios';

let url = 'http://localhost:8080/api/worker';


const getWorkers = async () => {
   try {
      const response = await axios.get(url+"/getWorkers");
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
        return response.data;
    }catch(error){
        throw error;
    }
}

export default{
   getWorkers,addWorker
}
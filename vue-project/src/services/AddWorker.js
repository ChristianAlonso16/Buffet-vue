import axios from 'axios';

let API_URL = 'http://localhost:8080/api/userAccount/registerWorker';

const addWorker = async (email, password, name, lastname) =>{
    try{
        const response = await axios.post(API_URL,{
            email: email,
            password: password,
            name: name,
            lastname: lastname,
            userType: 'Worker',
            status: 'enable'
        })
        return response.data;
    }catch(error){
        throw error;
    }
}

export default addWorker
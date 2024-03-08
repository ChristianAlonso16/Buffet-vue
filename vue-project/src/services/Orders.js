import axios from 'axios';

let API_URL = 'http://localhost:8080/api/order/';

const addOrder = async (order) =>{
    try{
        const response = await axios.post(`${API_URL}addOrder`, order);
        return response.data;
    }catch(error){
        throw error;
    }
}

export default {
    addOrder
}
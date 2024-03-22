import axios from 'axios';
let API_URL = 'http://localhost:8080/api/order';

const getAllOrders = async () => {
    const response = await axios.post(`${API_URL}/getAllOrderByEmail/k@gmail.com`);
    return response.data;
}

const getByNumOrder = async (number) => {
    const response = await axios.post(API_URL+`/getOrderByNumOrder/${number}`);
    return response.data;
}

export default {
    getAllOrders,
    getByNumOrder,
}
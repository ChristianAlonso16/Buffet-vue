import axios from 'axios';

let API_URL = 'http://localhost:8080/api/payment/';

const pay = async (price) =>{
    try{
        const response = await axios.post(`${API_URL}pay`, {price:price});
        return response;
    }catch(error){
        throw error;
    }
}
const paySuccess = async (paymentId, payerId) => {
    try {
        const response = await axios.get(`${API_URL}success`, {
            params: {
                paymentId: paymentId,
                PayerID: payerId
            }
        });
        return response;
    } catch (error) {
        console.error('Error al procesar la solicitud:', error);
    }
};
export default {
    pay,paySuccess
}
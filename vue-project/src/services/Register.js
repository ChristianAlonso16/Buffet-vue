import axios from 'axios';

let API_URL = 'http://localhost:8080/api/userAccount/register';
let userTypeP = "Public"
let statusP = "enable"

const registerUser = async (nameP, lastnameP, emailP, passwordP) => {
    try {
        const response = await axios.post(API_URL, {
            email: emailP,
            password: passwordP,
            name: nameP,
            lastname: lastnameP,
            userType: userTypeP,
            status: statusP
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};


export default {
    registerUser
};
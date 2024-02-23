import axios from 'axios';

let API_URL = 'http://localhost:8080/api/userAccount/register';

const registerUser = async (nameP, lastnameP,surnameP,phoneP, emailP, passwordP) => {
    try {
        console.log(nameP,lastnameP);
        const response = await axios.post(API_URL, {
            email: emailP,
            password: passwordP,
            name: nameP,
            lastname: lastnameP,
            surname:surnameP,
            phone:phoneP
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export default {
    registerUser
};
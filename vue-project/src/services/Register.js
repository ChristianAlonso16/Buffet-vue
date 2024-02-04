import axios from 'axios';

let API_URL = 'http://localhost:8080//api/userAccount/register';

const registerUser = async (namep, lastnamep, emailp) => {
    const user = {
        name: namep,
        lastname: lastnamep,
        email: emailp
    }
    try {
        const response = await axios.post(API_URL, { user });
        console.log(response);
    } catch (error) {
        throw error;
    } 
};


export default {
    registerUser
};
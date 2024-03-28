import axios from "axios";

let API_URL = "http://localhost:8080/api/workerAssignment/getAssignByUser";

const getWorkerAssign = async () => {
    try {
        const response = await axios.post(API_URL, {
            numWorker: "W456"
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export default getWorkerAssign;
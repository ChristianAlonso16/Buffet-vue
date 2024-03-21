import axios from "axios";

let API_URL = "http://localhost:8080/api/workerAssignment/getAssignByUser";

const getWorkerAssign = async (numWorker) => {
    try {
        const response = await axios.post(API_URL, {
            numWorker: numWorker
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export default getWorkerAssign;
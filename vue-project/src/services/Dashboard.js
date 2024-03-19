import axios from "axios";
import AdminService from './AdminService';
import PackageService from './Packages';

let API_URL="http://localhost:8080/api/order/"

const getOrders = async ()=>{
    try {
        const response = await axios.get(API_URL+'getAllOrdersRequired');
        return response.data;
    } catch (error) {
        return error;
    }
}

const calculateClients=async()=>{
    try {
        const response = await AdminService.getClients();
        if(!response){
            throw new Error();
        }
        return response.data.length;
    } catch (error) {
        return error;
    }
}

const calculateWorkers=async()=>{
    try {
        const response = await AdminService.getWorkers();
        if(!response){
            throw new Error();
        }
        return response.data.length;
    } catch (error) {
        return error
    }
}

const calculatePackages=async()=>{
    try {
        const response = await PackageService.getPackages();
        if(!response){
            throw new Error();
        }
        return response.data.length;
    } catch (error) {
        return error;
    }
}

const calculateOrders=async()=>{
    try {
        const response = await getOrders();
        if(!response){
            throw new Error();
        }
        return response.data.length;
    } catch (error) {
        return error;
    }
}

export default{
    getOrders,calculateClients,calculateWorkers,calculatePackages,calculateOrders
};
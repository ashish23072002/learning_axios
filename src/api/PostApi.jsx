import axios from "axios";

const api=axios.create({
    baseURL:"https://jsonplaceholder.typicode.com"
});

//get mothod 

export const getPost=()=>{
    return api.get("/posts")
}
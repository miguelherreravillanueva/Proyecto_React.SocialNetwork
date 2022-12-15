import axios from "axios";

const API_URL = "http://localhost:3001";

const getAll = async()=>{
    const res = await axios.get(API_URL + "/posts/getAllPosts")
    return res.data
} 

const postService = {
    getAll
}

export default postService
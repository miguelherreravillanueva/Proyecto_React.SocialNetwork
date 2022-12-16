import axios from "axios";

const API_URL = "http://localhost:3001";

const getAll = async()=>{
    const res = await axios.get(API_URL + "/posts/getAllPosts")
    return res.data
} 

const getPostById = async (_id)=>{
    const res = await axios.get(API_URL + "/posts/getPostById/"+_id)
    return res.data
}

const getPostByTitle = async (title)=>{
    const res = await axios.get(API_URL + "/posts/getPostByTitle/"+ title)
    console.log(res.data)
    return res.data
}

const deletePostById = async (_id)=>{
    const user = JSON.parse(localStorage.getItem("user"))
    const res = await axios.delete(API_URL + "/posts/deletePostById/" + _id, {
        headers:{
            authorization: user?.token
        }
    })
    return res.data
}

const createPost = async (postData)=>{
    const user = JSON.parse(localStorage.getItem("user"))
    const res = await axios.post(API_URL + "/posts/createPost/", postData,{
        headers:{
            authorization: user?.token
        }
    })
    return res.data
}

const postService = {
    getAll,
    getPostById,
    getPostByTitle,
    deletePostById,
    createPost
}

export default postService
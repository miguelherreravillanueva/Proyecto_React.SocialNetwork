import axios from "axios";

const API_URL = "https://proyecto-backend-red-social-blond.vercel.app";

const register = async (userData) => {
    const res = await axios.post(API_URL + "/users/createUser", userData)
    return res.data
}

const login = async (userData) => {
    const res = await axios.post(API_URL + "/users/loginUser", userData)
    if (res.data) {
        localStorage.setItem("user", JSON.stringify(res.data))
    }
    return res.data
}

const logout = async()=>{
    const user = JSON.parse(localStorage.getItem("user"))
    const res = await axios.delete(API_URL + "/users/logoutUser", {
        headers:{
            authorization: user?.token
        }
    })
    if(res.data){
        localStorage.removeItem("user")
    }
    return res.data
}

const authService = {
    register,
    login,
    logout
}

export default authService
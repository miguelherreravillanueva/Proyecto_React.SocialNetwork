import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import authService from "./authService"

const initialState={
    user: null,
}

export const register = createAsyncThunk("auth/register", async(user)=>{
    try {
     await authService.register(user)
    } catch (error) {
        console.log(user)
    }
})

export const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{},
})

export default authSlice.reducer

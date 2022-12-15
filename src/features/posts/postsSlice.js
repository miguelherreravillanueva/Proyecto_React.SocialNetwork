import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import postService from "./postsService"


const initialState = {
    posts: []
}

export const getAll = createAsyncThunk("posts/getAll", async() => {
    try {
        return await postService.getAll()
    } catch(error) {
console.log (error)
    }
})

export const postsSlice = createSlice({
    name:"posts",
    initialState,
    reducers:{
        reset: (state)=>{
            state.isLoading = false
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(getAll.fulfilled, (state, action)=>{
            state.posts=action.payload.posts
        })
        builder.addCase(getAll.pending, (state)=>{
            state.isLoading = true
        })
    }
})
export const {reset} = postsSlice.actions
export default postsSlice.reducer
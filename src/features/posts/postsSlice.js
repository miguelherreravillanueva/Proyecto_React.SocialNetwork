import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import postService from "./postsService"


const initialState = {
    posts: [],
    isLoading: false,
    post: {}
}

export const getAll = createAsyncThunk("posts/getAll", async() => {
    try {
        return await postService.getAll()
    } catch(error) {
console.log (error)
    }
})

export const getPostById = createAsyncThunk("posts/getPostById", async(_id) => {
    try {
        return await postService.getPostById(_id)
    } catch(error) {
console.log (error)
    }
})

export const getPostByTitle = createAsyncThunk("posts/getPostByTitle/", async(title)=>{
    try {
        return await postService.getPostByTitle(title)
    } catch (error) {
        
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
        builder.addCase(getPostById.fulfilled, (state, action)=>{
            state.post = action.payload.post
        })
        builder.addCase(getPostByTitle.fulfilled,
            (state, action)=>{
                state.posts = action.payload
            })
    }
})
export const {reset} = postsSlice.actions
export default postsSlice.reducer
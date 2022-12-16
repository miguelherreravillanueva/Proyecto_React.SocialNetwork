import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import postService from "./postsService"


const initialState = {
    posts: [],
    isLoading: false,
    post: {},
    isError: false,
    isSuccess: false,
    msg: ""
}

export const getAll = createAsyncThunk("posts/getAll", async () => {
    try {
        return await postService.getAll()
    } catch (error) {
        console.log(error)
    }
})

export const getPostById = createAsyncThunk("posts/getPostById", async (_id) => {
    try {
        return await postService.getPostById(_id)
    } catch (error) {
        console.log(error)
    }
})

export const getPostByTitle = createAsyncThunk("posts/getPostByTitle/", async (title) => {
    try {
        return await postService.getPostByTitle(title)
    } catch (error) {
        console.log(error)
    }
})

export const deletePostById = createAsyncThunk("posts/deletePostById/", async (_id) => {
    try {
        return await postService.deletePostById(_id)
    } catch (error) {
        console.log(error)
    }
})

export const createPost =createAsyncThunk("posts/createPost/", async()=>{
    try {
        return await postService.createPost()
    } catch (error) {
        console.log(error)
    }
})

export const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = false;
            state.msg = "";
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getAll.fulfilled, (state, action) => {
            state.posts = action.payload.posts
        })
        builder.addCase(getAll.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(getPostById.fulfilled, (state, action) => {
            state.post = action.payload.post
        })
        builder.addCase(getPostByTitle.fulfilled, (state, action) => {
            state.posts = action.payload.posts
        })
        builder.addCase(deletePostById.fulfilled, (state, action) => {
            console.log(action.payload)
            state.posts = state.posts.filter(post => post._id !== action.payload.post._id)
        })
    }
})
export const { reset } = postsSlice.actions
export default postsSlice.reducer
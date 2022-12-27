import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import commentsService from "./commentsService"

const initialState = {
    comments: {},
    isLoading: false,
    isError: false,
    isSuccess: false,
    msg: ""
}

export const createComment = createAsyncThunk("/comments/createComment/", async (_id) => {
    try {
        return await commentsService.createComment(_id)
    } catch (error) {
        console.log(error)
    }
})

export const commentsSlice = createSlice({
    name: "comments",
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
        builder
            .addCase(createComment.fulfilled, (state, action) => {
                state.comments = [action.payload.post, ...state.posts]
                state.isSuccess = true
                state.msg = action.payload.msg
            });
    }
})

export const { reset } = commentsSlice.actions
export default commentsSlice.reducer
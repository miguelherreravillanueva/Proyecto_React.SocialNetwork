import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import commentsService from "./commentsService"

const initialState = {
    comments: [],
    comment:{},
    isLoading: false,
    isError: false,
    isSuccess: false,
    msg: ""
}

export const getComments = createAsyncThunk("comments/getComments", async () => {
    try {
        return await commentsService.getComments();
    } catch (error) {
        console.error(error);
    }
});

export const createComment = createAsyncThunk("/comments/createComment/", async (formData) => {
    try {
        return await commentsService.createComment(formData)
    } catch (error) {
        console.log(error)
    }
})

export const deleteComment = createAsyncThunk("comments/deleteCommentById", async (_id) => {
    try {
        return await commentsService.deleteComment(_id);
    } catch (error) {
        console.error(error);
    }
});

export const updateComment = createAsyncThunk("comments/updateCommentById", async (_id, comment) => {
    try {
        return await commentsService.updateComment(_id, comment);
    } catch (error) {
        console.error(error);
    }
});


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
            .addCase(getComments.fulfilled, (state, action) => {
                state.comments = action.payload;

            })
            .addCase(createComment.fulfilled, (state, action) => {
                state.comments = [action.payload.comment, ...state.comments]
                state.isSuccess = true
                state.msg = action.payload.msg
            })
            .addCase(deleteComment.fulfilled, (state, action) => {
                state.comments = state.comments.filter(
                    (comment) => comment._id !== +action.payload._id
                );
            })
            .addCase(updateComment.fulfilled, (state, action) => {
                const comments = state.comments.map((comment) => {
                    if (comment._id === action.payload.comment._id) {
                        comment = action.payload.comment;
                    }
                    return comment;
                });
                state.comments = comments;
            });
    }
})

export const { reset } = commentsSlice.actions
export default commentsSlice.reducer
import axios from "axios";

const API_URL = "http://localhost:3001";

const getComments = async () => {
    const res = await axios.get(API_URL + "/comments");
    return res.data;
};

const createComment = async (_id) => {
    const user = JSON.parse(localStorage.getItem("user"))
    const res = await axios.post(API_URL + "/comments/createComment/" + _id, {
        headers: {
            authorization: user?.token
        }
    })
    return res.data
}

const deleteComment = async (_id) => {
    const res = await axios.delete(API_URL + "/comments/" + _id);
    return res.data;
};

const updateComment = async (comment) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const res = await axios.put(API_URL + "/comments/updateCommentById/" + comment._id, comment, {
        headers: {
            authorization: user?.token,
        },
    });
    return res.data;
}

const commentsService = {
    getComments,
    createComment,
    deleteComment,
    updateComment
}

export default commentsService
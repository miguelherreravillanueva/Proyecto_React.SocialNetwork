import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getAll } from '../../features/posts/postsSlice'

const EditPost = () => {
    const { _id } = useParams()
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const { post, editPost } = useSelector((state) => state.posts)
    const navigate = useNavigate();
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAll(_id));
        setTitle(post.title);
    }, [post.title]);

    useEffect(() => {
        dispatch(getAll(_id));
        setTitle(post.body);
    }, [post.body]);

    const onSubmit = (e) => {
        e.preventDefault();
        editPost(post._id, { title, body });
        setTimeout(() => {
            navigate("/posts");
        }, 2000);
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    name="title"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    placeholder="Change the title"
                />
                <input
                    type="text"
                    name="body"
                    onChange={(e) => setBody(e.target.value)}
                    value={body}
                    placeholder="Change your post"
                />
                <button>Save</button>
            </form>
        </div>
    )
}

export default EditPost
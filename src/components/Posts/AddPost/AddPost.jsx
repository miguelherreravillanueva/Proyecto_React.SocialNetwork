import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { reset, createPost } from "../../../features/posts/postsSlice"
import { notification } from "antd";
import { useNavigate } from 'react-router-dom'
import { Button } from "antd";


const AddPost = () => {
    const [formData, setFormData] = useState({
        title: "",
        body: "",
        image: ""
    })
    const { title, body, image } = formData
    const { isSuccess, msg, isError } = useSelector((state) => state.posts)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (isSuccess) {
            notification.success({
                msg: "Success",
                description: msg,
            })
            setTimeout(() => {
                navigate("/posts")
            }, 2000);
        }
        if (isError) {
            notification.error({
                msg: "Error",
                description: msg
            })
        }
        dispatch(reset())
    }, [isSuccess, isError, msg])

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }
    const onSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        dispatch(createPost(formData))
    }

    return (
        <div className='addPost-container'>
            <form onSubmit={onSubmit}>
                <h4>Say something!</h4>
                <input
                    type="text"
                    name="title"
                    value={title}
                    onChange={onChange} placeholder="Title" />
                <input
                    type="text"
                    name="body"
                    value={body}
                    onChange={onChange} placeholder="Write something" />
                <Button type="primary" htmlType="submit" style={{
                    border: "2px solid gray",
                    background: "transparent",
                    color: "#47311d",
                }}>
                    Publish
                </Button>

            </form>
        </div>
    )
}

export default AddPost
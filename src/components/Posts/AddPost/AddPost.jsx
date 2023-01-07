import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { reset, createPost } from "../../../features/posts/postsSlice"
import { notification } from "antd";
import { HistoryOutlined, VideoCameraOutlined } from "@ant-design/icons"
import { useNavigate } from 'react-router-dom'
import { Button } from "antd";
import { Link } from "react-router-dom";
import "./AddPost.scss"


const AddPost = () => {
    const [formData, setFormData] = useState({
        body: "",
    })
    const { body } = formData
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
            <span>
                <HistoryOutlined /> <Link to="*">Stories</Link> |
                <VideoCameraOutlined /> <Link to="*">Reels</Link>
            </span>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    name="body"
                    value={body}
                    onChange={onChange} placeholder="What's on your mind?" />
                <Button type="primary" htmlType="submit" style={{
                    border: "2px solid lightGray",
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
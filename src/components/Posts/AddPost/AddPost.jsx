import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {reset, createPost} from "../../../features/posts/postsSlice"
import { notification } from "antd";


const AddPost = () => {
    const [formData, setFormData] = useState({
        title: "",
        body: "",
    })
    const {title, body} = formData
    const dispatch = useDispatch()
    const {isSuccess, msg, isError} = useSelector((state)=>state.auth)

    useEffect(() => {
        if (isSuccess) {
            notification.success({
                msg: "Success",
                description: msg,
            })
        }
        if (isError) {
            notification.error({
                msg: "Error",
                description: msg
            })
        }
        dispatch(reset())
    }, [isSuccess, isError, msg])

const onChange = (e)=>{
    setFormData((prevState)=>({
        ...prevState,
        [e.target.name]: e.target.value
    }))
}
    const onSubmit = (e)=>{
        e.preventDefault()
        dispatch(createPost(formData))
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <h4>Say something!</h4>
                <input type="text" name="title" value={title} onChange={onChange} placeholder="Title" />
                <input type="text" name="body" value={body} onChange={onChange} placeholder="Write something" /> 
                <button type="submit">Publish</button>

            </form>
        </div>
    )
}

export default AddPost
import { notification } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createComment } from '../../../features/comments/commentsSlice'
import { reset } from '../../../features/posts/postsSlice'

const AddComment = () => {
    const [formData, setFormData] = useState({
        body: "",
    })
    const { body } = formData
    const { isSuccess, msg, isError } = useSelector((state) => state.comments)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    
    useEffect(() => {
        if (isSuccess) {
            notification.success({
                msg: "Success",
                description: msg,
            })
            setTimeout(() => {
                navigate("/post/:_id")
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
        dispatch(createComment(formData))
    }

    return (
        <div>
        <form onSubmit={onSubmit}>
            <h4>Comment something!</h4>
                        
            <input
                type="text"
                name="body"
                value={body}
                onChange={onChange} placeholder="Write something" />
            <button type="submit">Publish</button>

        </form>
    </div>
        )
    }

export default AddComment
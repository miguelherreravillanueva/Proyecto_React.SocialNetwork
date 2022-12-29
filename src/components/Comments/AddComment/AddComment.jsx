import { notification } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createComment } from '../../../features/comments/commentsSlice'
import { reset } from '../../../features/posts/postsSlice'
import { Button, Form, Input } from "antd";

const AddComment = () => {
    const [formData, setFormData] = useState({
        body: "",
    })
    const { body } = formData
    const { isSuccess, msg, isError } = useSelector((state) => state.comments)
    const [form] = Form.useForm();
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const onFinish = () => {
        dispatch(createComment(formData))
        form.resetFields();
    }


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


    return (
        <Form onFinish={onFinish} form={form}>
            <Form.Item label="" name="comment">
                <Input placeholder="Write your comment" />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
}

export default AddComment
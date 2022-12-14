import { notification } from 'antd'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { login, reset } from '../../features/auth/authSlice'

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })
    const { email, password } = formData
    const { isError, msg, isSuccess } = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        if (isSuccess) {
            notification.success({
                msg: "Success",
                description: msg
            })
            setTimeout(() => {
                navigate("/profile")
            }, 2000);
        }
        if (isError) {
            notification.error({
                msg: "Error",
                description: msg
            })
        }
        dispatch(reset())
    }, [isError, isSuccess, msg])


    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }
    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(login(formData))
        console.log("formData", formData)
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="email" name="email" value={email} onChange={onChange} placeholder="Email" />

            <input type="password" name='password' value={password} onChange={onChange} placeholder="Password" />
            <button type='submit'>Login</button>
        </form>
    )
}

export default Login
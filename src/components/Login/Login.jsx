import { notification } from 'antd'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import "./Login.scss";
import { login, reset } from '../../features/auth/authSlice'
import { Button } from "antd";

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
        <div className="container-login">
            <form onSubmit={onSubmit}>
                <h3>Log in</h3>
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={onChange}
                    placeholder="Email" />
                <input
                    type="password"
                    name='password'
                    value={password}
                    onChange={onChange} placeholder="Password" />

                <Button type="primary" htmlType="submit" style={{

                    border: "2px solid gray",
                    background: "transparent",
                    color: "#47311d",
                }}>
                    Login
                </Button>
            </form>

        </div>
    )
}

export default Login
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { register, reset } from '../../features/auth/authSlice'
import { notification, Button } from "antd";
import "./Register.scss";
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        password2: "",
    })
    const { name, email, password, password2 } = formData
    const dispatch = useDispatch()
    const { isSuccess, msg, isError } = useSelector((state) => state.auth)
    const navigate = useNavigate()

    useEffect(() => {
        if (isSuccess) {
            notification.success({
                msg: "Success",
                description: msg,
            })
            setTimeout(() => {
                navigate("/login")
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
            [e.target.name]: e.target.value,
        }))
    }
    const onSubmit = (e) => {
        e.preventDefault()
        if (password !== password2) {
            return notification.error({
                msg: "Error",
                description: "Passwords do not macth"
            });
        } else {
            dispatch(register(formData))
        }
    }

    return (
        <div className="register-form">
            <form onSubmit={onSubmit}>
                <h3>Sign in</h3>
                <input type="text" name="name" value={name} onChange={onChange} placeholder="Name" />
                <input type="email" name="email" value={email} onChange={onChange} placeholder="Email" />
                <input type="password" name="password" value={password} onChange={onChange} placeholder="Password" />
                <input type="password" name="password2" value={password2} onChange={onChange} placeholder="Repite password" />
                <Button type="primary" htmlType="submit" style={{
                    border: "2px solid lightGray",
                    background: "transparent",
                    color: "#47311d",
                }}>
                    Sign in
                </Button>
            </form>
        </div>



    )
}

export default Register
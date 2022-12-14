import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../../features/auth/authSlice'
import { notification } from "antd";

const Register = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        password2: "",
    })
    const { name, email, password, password2 } = formData
    const dispatch = useDispatch()
    const { isSuccess, msg } = useSelector((state) => state.auth)

    useEffect(() => {
        if (isSuccess) {
            notification.success({
                msg: "Yes!",
                description: msg,
            })
        }
    }, [isSuccess])

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
        <form onSubmit={onSubmit}>
            <h3>Sign in</h3>
            <input type="text" name="name" value={name} onChange={onChange} placeholder="Name" />
            <input type="email" name="email" value={email} onChange={onChange} placeholder="Email" />
            <input type="password" name="password" value={password} onChange={onChange} placeholder="Password" />
            <input type="password" name="password2" value={password2} onChange={onChange} placeholder="Repite password" />
            <button type="submit">Sign</button>
        </form>
    )
}

export default Register
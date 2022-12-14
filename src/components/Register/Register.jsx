import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
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
            return notification.success({
                msg: "Welcome",
                description: "Thanks for sign in my site"
            });
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="text" name="name" value={name} onChange={onChange} placeholder="Name" />
            <input type="email" name="email" value={email} onChange={onChange} placeholder="Email" />
            <input type="password" name="password" value={password} onChange={onChange} placeholder="Password" />
            <input type="password" name="password2" value={password2} onChange={onChange} placeholder="Repite password" />
            <button type="submit">Sign</button>
        </form>
    )
}

export default Register
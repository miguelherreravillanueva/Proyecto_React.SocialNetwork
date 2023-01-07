import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../../features/auth/authSlice'
import { LoginOutlined, LogoutOutlined, UserOutlined, HomeOutlined, UserAddOutlined, CrownOutlined } from "@ant-design/icons"
import "./Header.scss";


const Header = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)
    const [text, setText] = useState("")


    const handleChange = (e) => {
        setText(e.target.value)
        if (e.key === "Enter") {
            navigate("/search/" + text)
        }
    }
    const onLogout = (e) => {
        e.preventDefault()
        dispatch(logout())
        setTimeout(() => {
            navigate("/login")
        }, 3000)
    }
    return (
        <nav className='navbar'>
            GAPNET
            <Link to="/"><HomeOutlined /></Link>

            {user?.user?.role === 'admin' ? <span><Link to="/admin"><CrownOutlined /> Admin</Link>
            </span> : ''}

            {user ?
                <>
                    <Link to="/profile"><UserOutlined /></Link>
                    <Link to="/" onClick={onLogout}>  <LogoutOutlined /></Link>
                </>
                :
                <>
                    <Link to="/login"><LoginOutlined /></Link>
                    <Link to="/register"><UserAddOutlined /></Link>
                </>
            }
            <input onKeyUp={handleChange} placeholder="Search post" name='text' />

        </nav>
    )
}

export default Header
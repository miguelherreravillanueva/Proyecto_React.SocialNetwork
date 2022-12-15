import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../../features/auth/authSlice'

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
        <nav>
            <span>
                <Link to="/">Home</Link>
            </span>
            <div>
                <input onKeyUp={handleChange} placeholder="Search post" name='text' />
                {user ?
                    <>
                        <span>
                            <Link to="/" onClick={onLogout}>Logout</Link>
                        </span>
                        <span>
                            <Link to="/profile">Profile</Link>
                        </span>
                    </>
                    :
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Sign in</Link>
                    </>
                }
            </div>
        </nav>
    )
}

export default Header
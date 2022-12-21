import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../../features/auth/authSlice'
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
            <span>
                <Link to="/">Home</Link>
            </span>
            <div>
                <input onKeyUp={handleChange} placeholder="Search post" name='text' />
                {user?.user?.role === 'admin' ? <span><Link to="/admin">Admin</Link>
                </span>:''}
                {user ?
                    <>
                        <span>
                            <Link to="/" onClick={onLogout}>Logout</Link>
                        </span>
                        <span>
                            <Link to="/profile">Profile</Link>
                        </span>
                        <span>
                            <Link to="/addPost">Publish</Link>
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
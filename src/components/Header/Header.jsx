import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../../features/auth/authSlice'

const Header = () => {
const navigate = useNavigate()
const dispatch = useDispatch()
const {user} = useSelector((state)=>state.auth)
const onLogout=(e)=>{
    e.preventDefault()
    dispatch(logout())
    setTimeout(()=>{
        navigate("/login")
    }, 3000)
}
    return (
        <nav>
            <span>Header</span>
            <div>
                {user ?
                    <span>
                        <Link to="/" onClick={onLogout}>Logout</Link>
                    </span>
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
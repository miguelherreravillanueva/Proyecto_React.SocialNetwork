import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAll } from '../../features/posts/postsSlice'
import PostAdmin from './PostAdmin/PostAdmin'
import "./Admin.scss"


const Admin = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAll())
    }, [])

    return (
        <div className='admin'>
            <p>
                See as admin
            </p>
            <div>
                <PostAdmin />
            </div>
        </div>
    )
}

export default Admin
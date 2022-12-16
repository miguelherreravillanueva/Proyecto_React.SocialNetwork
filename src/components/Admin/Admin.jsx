import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAll } from '../../features/posts/postsSlice'
import PostAdmin from './PostAdmin/PostAdmin'

const Admin = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAll())
    }, [])

    return (
        <div>
            <h2>Admin</h2>
            <PostAdmin />
        </div>
    )
}

export default Admin
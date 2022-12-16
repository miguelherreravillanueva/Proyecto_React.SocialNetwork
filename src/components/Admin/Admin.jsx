import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { reset } from '../../features/auth/authSlice'
import { getAll } from '../../features/posts/postsSlice'
import PostAdmin from './PostAdmin/PostAdmin'

const Admin = () => {
    // const {isLoading} = useSelector((state)=>state.posts)
    const dispatch = useDispatch()

    // const getPostsAndReset = async()=>{
    //     await dispatch(getAll())
    //     dispatch(reset())
    // }

    useEffect(() => {
        dispatch(getAll())
    //  getPostsAndReset()
    }, [])
    
    // if(isLoading){
    //     return <p>Cargando posts...</p>
    // }

  return (
    <div>
        <h2>Admin</h2>
        <PostAdmin/>
    </div>
  )
}

export default Admin
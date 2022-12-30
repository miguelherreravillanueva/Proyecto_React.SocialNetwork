import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAll, reset } from '../../features/posts/postsSlice'
import Post from './Post/Post'
import "./Posts.scss";


const Posts = () => {
  const { isLoading } = useSelector((state) => state.posts)
  const dispatch = useDispatch()
  const getAllAndReset = async () => {
    await dispatch(getAll())
    dispatch(reset())
  }
  useEffect(() => {
    getAllAndReset()
  }, [])

  if (isLoading) {
    return <h3>Loading posts...</h3>
  }

  return (
    <div className='posts'>
      <h2>
        Feeds
      </h2>
      <Post />
    </div>
  )
}

export default Posts
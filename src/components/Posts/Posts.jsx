import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAll, reset } from '../../features/posts/postsSlice'
import Post from './Post/Post'

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
    <div>
      <h2>
        Posts
      </h2>
      <Post />
    </div>
  )
}

export default Posts
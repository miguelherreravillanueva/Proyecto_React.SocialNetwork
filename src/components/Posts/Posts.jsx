import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getComments } from '../../features/comments/commentsSlice'
import { getAll, reset } from '../../features/posts/postsSlice'
import AddComment from '../PostDetail/AddComment/AddComment'
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
    dispatch(getComments())
  }, [])

  if (isLoading) {
    return <h3>Loading posts...</h3>
  }

  return (
    <div>
      <h2>
        Feeds
      </h2>
      <AddComment/>
      <Post />
    </div>
  )
}

export default Posts
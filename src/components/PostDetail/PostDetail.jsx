import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getPostById } from '../../features/posts/postsSlice'

const PostDetail = () => {
  const { _id } = useParams()
  const dispatch = useDispatch()
  const {post} = useSelector((state)=> state.posts)

  useEffect(() => {
    dispatch(getPostById(_id))
  }, [])


  return (
    <div>
      PostDetail
      {console.log(post)}
      <p>{post.userId.name}</p>
      <p>{post.title}</p>
      <p>{post.body}</p>
    </div>
  )
}

export default PostDetail
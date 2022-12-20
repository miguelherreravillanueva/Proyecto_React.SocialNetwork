import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { deletePostById, getPostById } from '../../features/posts/postsSlice'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const PostDetail = () => {
  const { _id } = useParams()
  const dispatch = useDispatch()
  const {post} = useSelector((state)=> state.posts)
  const {user} = useSelector((state)=> state.auth)
  const navigate = useNavigate ()

  useEffect(() => {
    setTimeout(() => {
      navigate("/posts")
  }, 2000);
  
  }, [])
  

  const deletePost = (_id) => {
    dispatch(deletePostById(_id))
  }

  useEffect(() => {
    dispatch(getPostById(_id))
  }, [])
if(!post){
  return <p>Loading..</p>
}

  return (
    <div key={post._id}>
      <p>{post.userId?.name}</p>
      <p>{post.title}</p>
      <p>{post.body}</p>
      {user.user?._id === post.userId?._id ?
      <>
      <button onClick={()=>deletePost(post._id)}>Delete post</button>
      <Link  to="/posts"></Link> 
      </>
      :
      ""
    } 
    </div>
  )
}

export default PostDetail
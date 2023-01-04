import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getPostById } from '../../features/posts/postsSlice'
import { Card } from 'antd';
import { CommentOutlined } from "@ant-design/icons"
import "./PostDetail.scss"

const PostDetail = () => {
  const { _id } = useParams()
  const dispatch = useDispatch()
  const { post } = useSelector((state) => state.posts)

  useEffect(() => {
    dispatch(getPostById(_id))
  }, [])
  if (!post) {
    return <p>Loading...</p>

  }

  return (
    <div className='postDetail-container' key={post._id}>
      <p></p>

      <Card
        title={post.userId?.name}
        bordered={false}
        style={{
          width: 300,
          border: "1px solid gray",
          background: "transparent",
          color: "#47311d",
        }}
      >
        <CommentOutlined />
        <p>{post.title}
        </p>
        <p>{post.body}</p>

      </Card>
    </div>
  )
}

export default PostDetail
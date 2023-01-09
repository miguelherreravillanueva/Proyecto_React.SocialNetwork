import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { dislike, getPostById, like } from '../../features/posts/postsSlice'
import { Card } from 'antd';
import { CommentOutlined, HeartOutlined, HeartFilled } from "@ant-design/icons"
import "./PostDetail.scss"
// import { useState } from 'react';

const PostDetail = () => {
  const { _id } = useParams()
  const dispatch = useDispatch()
  const { post } = useSelector((state) => state.posts)
  const { user } = useSelector((state) => state.auth);
  // const [visible, setVisible] = useState(false)


  useEffect(() => {
    dispatch(getPostById(_id))
  }, [])
  if (!post) {
    return <p>Loading...</p>

  }

  const isAlreadyLiked = post.likes?.includes(user?.user._id);
  return (
    <div className='postDetail-container' key={post._id}>
      <p></p>

      <Card
        title={post.userId?.name}
        bordered={false}
        style={{
          width: 300,
          border: "1px solid lightGray",
          background: "transparent",
          color: "#47311d",
        }}
      >
        <p><CommentOutlined /> {post.body}</p>
        <span className="wish"> {post.likes?.length}</span>
        <span>
          {isAlreadyLiked ? (
            <HeartFilled onClick={() => dispatch(dislike(post._id))} />
          ) : (
            <HeartOutlined onClick={() => dispatch(like(post._id))} />
          )}
        </span>
        {/* <button onclick={setVisible(true)}></button> */}

      </Card>
    </div>
  )
}

export default PostDetail
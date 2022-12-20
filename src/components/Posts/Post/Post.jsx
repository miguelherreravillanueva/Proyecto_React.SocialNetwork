import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { dislike, like } from '../../../features/posts/postsSlice';

const Post = () => {
  const { posts } = useSelector((state) => state.posts)
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const post = posts?.map((post) => {
    const isAlreadyLiked = post.likes?.includes(user?.user._id);
    return (
      <div className="post" key={post._id}>
        <Link to={"/post/" + post._id}>
          <p>{post.userId.name} {post.title}: {post.body}</p>
        </Link>
        
        <span className="wish"> {post.likes?.length} </span>

        {isAlreadyLiked ? (
          <HeartFilled onClick={() => dispatch(dislike(post._id))} />
        ) : (
          <HeartOutlined onClick={() => dispatch(like(post._id))} />
        )}
      </div>
    )
  })

  return (
    <div>
      {post}
    </div>
  )
}

export default Post
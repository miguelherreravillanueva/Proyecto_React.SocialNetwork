import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deletePostById } from '../../../features/posts/postsSlice'

const PostAdmin = () => {
    const { posts } = useSelector((state) => state.posts)
    const dispatch = useDispatch()

    const deletePost = (_id) => {
      dispatch(deletePostById(_id))
    }

    const post = posts?.map((post) => {
        return (
            <div className="post" key={post._id}>
                <br />
                <span>{post.title}: </span>
                <span>{post.body} <br /></span>
                <button onClick={()=>deletePost(post._id)}>Delete post</button>
            </div>
        )
    })

    return (
        <div>{post}</div>
    )
}

export default PostAdmin
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deletePostById } from '../../../features/posts/postsSlice'
import { DeleteOutlined } from "@ant-design/icons";
import "./PostAdmin.scss"

const PostAdmin = () => {
    const { posts } = useSelector((state) => state.posts)
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch()
    const [selectedImage] = useState(0);
    const images = [
        "https://img1.freepng.es/20180326/ehw/kisspng-rikord-island-price-furniture-business-polaroid-5ab92ef5e00042.0205436215220856219175.jpg",
    ];

    const post = posts?.map((post) => {
        return (
            
            <>
                <div className="post" key={post._id}>
                    <img src={images[selectedImage]} alt="" width={100} height={100} />
                    <br />
                    <p><strong>
                        {post.userId.name}
                    </strong>
                        <br />
                        <br />
                        <i>{post.body}</i> </p>
                    <span>
                        {user.user?._id === post.userId?._id ? (
                            <>
                                <DeleteOutlined onClick={() => dispatch(deletePostById(post._id))} />
                            </>

                        ) : ("")
                        }
                    </span>
                </div>
            </>
        )
    })

    return (
        <div className='PostAdmin'>{post}</div>
    )
}

export default PostAdmin
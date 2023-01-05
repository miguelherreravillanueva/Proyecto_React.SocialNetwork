import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { HeartOutlined, HeartFilled, DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { deletePostById, getPostById, dislike, like } from '../../../features/posts/postsSlice';
import EditModal from './EditModal/EditModal';
import "./Post.scss";

const Post = () => {
  const { posts } = useSelector((state) => state.posts)
  const { user } = useSelector((state) => state.auth);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch();
  const [selectedImage] = useState(0);
  const images = [
    "https://img1.freepng.es/20180326/ehw/kisspng-rikord-island-price-furniture-business-polaroid-5ab92ef5e00042.0205436215220856219175.jpg",
  ];

  const showModal = (_id) => {
    dispatch(getPostById(_id));
    setIsModalVisible(true);
  };

  const post = posts?.map((post) => {
    const isAlreadyLiked = post.likes?.includes(user?.user._id);
    return (
      <div className="post" key={post._id}>
        <img src={images[selectedImage]} alt="" width={100} height={100} />
        <br />
        <Link to={"/post/" + post._id}>
          <p><strong>
            {post.userId.name}
          </strong>
            <br />
            <br />
            <i>{post.body}</i> </p>
        </Link>
        <span className="wish"> {post.likes?.length} </span>
        <span>
          {isAlreadyLiked ? (
            <HeartFilled onClick={() => dispatch(dislike(post._id))} />
          ) : (
            <HeartOutlined onClick={() => dispatch(like(post._id))} />
          )}
        </span>
        <span>
          {user.user?._id === post.userId?._id ? (
            <>
              <DeleteOutlined onClick={() => dispatch(deletePostById(post._id))} />
              <EditOutlined onClick={() => showModal(post._id)} />
            </>

          ) : ("")
          }
        </span>

      </div>
    )
  })

  return (
    <div className='post1'>
      {post}
      <EditModal visible={isModalVisible} setVisible={setIsModalVisible} />
    </div>
  )
}

export default Post
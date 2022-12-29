import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteComment, getComments } from '../../../features/comments/commentsSlice';
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import EditModal2 from './EditModal2/EditModal2';

const Comment = () => {
    const { comments } = useSelector((state) => state.comments);
    const dispatch = useDispatch();

    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = (_id) => {
        dispatch(getComments(id));
        setIsModalVisible(true);

    };

    const comment = comments.map((comment) => {
        return (
            <div className="comment" key={comment._id}>
                <DeleteOutlined onClick={() => dispatch(deleteComment(comment._id))} />
                <EditOutlined onClick={() => showModal(comment._id)} />
            </div>
        );
    });

    return (
        <div>{comment}
        <EditModal2 visible={isModalVisible} setVisible={setIsModalVisible} /></div>
    )
}

export default Comment
import React from 'react'
import { useSelector } from 'react-redux';
import { deleteComment } from '../../../features/comments/commentsSlice';

const Comment = () => {
    const { comments } = useSelector((state) => state.comments);

    const comment = comments.map((comment) => {
        return (
            <div className="comment" key={comment._id}>
                <p>{comment.name}</p>
                <DeleteOutlined onClick={()=>dispatch(deleteComment(comment._id))} />
            </div>
        );
    });

        return (
            <div>{comment}</div>
        )
    }

export default Comment
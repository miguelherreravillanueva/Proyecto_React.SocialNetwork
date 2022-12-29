import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { getComments } from '../../features/comments/commentsSlice';
import AddComment from './AddComment/AddComment';

const Comments = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getComments())
    }, []);


    return (
        <div>
            <AddComment />
        </div>

    )
}

export default Comments

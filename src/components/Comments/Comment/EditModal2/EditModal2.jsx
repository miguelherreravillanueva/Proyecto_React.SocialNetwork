import React from 'react'

const EditModal2 = ({ visible, setVisible }) => {
    const { comment } = useSelector((state) => state.comments); 


    const onFinish = (values) => {
        const commentWithId = { ...values, _id: comment._id };
        dispatch(updateComment(commentWithId));
        setVisible(false);
    };

  return (
    <div>EditModal2</div>
  )
}

export default EditModal2
import { Form } from 'antd';
import React from 'react'
import { useDispatch } from 'react-redux';
import { updateComment } from '../../../../features/comments/commentsSlice';

const EditModal2 = ({ visible, setVisible }) => {
    const { comment } = useSelector((state) => state.comments);
    const [form] = Form.useForm();
    const dispatch = useDispatch();


    const onFinish = (values) => {
        const commentWithId = { ...values, _id: comment._id };
        dispatch(updateComment(commentWithId));
        setVisible(false);
    };

    useEffect(() => {
        const commentToEdit = {
            ...comment,
        };
        form.setFieldsValue(commentToEdit);
    }, [comment]);


    return (
        <div>
            <Modal
                title="Edit Comment"
                visible={visible}
                footer={[]}
            >
                <Form onFinish={onFinish} form={form}>
                    <Form.Item label="" name="comment">
                        <Input placeholder="Write your comment" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}

export default EditModal2
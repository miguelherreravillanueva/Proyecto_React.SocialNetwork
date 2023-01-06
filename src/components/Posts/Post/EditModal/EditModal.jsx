import React, { useEffect } from 'react'
import { Button, Modal, Form, Input } from "antd";
import { useDispatch, useSelector } from 'react-redux';
import { updatePost } from '../../../../features/posts/postsSlice';

const EditModal = ({ visible, setVisible }) => {
    const { post } = useSelector((state) => state.posts);
    const [form] = Form.useForm();
    const dispatch = useDispatch();

    const onFinish = (values) => {
        const postWithId = { ...values, _id: post._id };
        dispatch(updatePost(postWithId));
        setVisible(false);
    };

    useEffect(() => {
        const postToEdit = {
            ...post,
        };
        form.setFieldsValue(postToEdit);
    }, [post]);

    return (
        <Modal
            title="Edit Post"
            visible={visible}
            footer={[]}
        >
            <Form onFinish={onFinish} form={form}>
                <Form.Item name="body">
                    <Input placeholder="Say something about it" />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" style={{
                        border: "2px solid lightGray",
                        background: "transparent",
                        color: "#47311d",
                    }}>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default EditModal
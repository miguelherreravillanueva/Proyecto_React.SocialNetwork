import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createComment } from '../../../features/comments/commentsSlice';
import { Form, Input, Button } from "antd";

const AddComment = (props) => {
    const [formData, setFormData] = useState({
        body: "",
        postId: props._id,
    });

    const { body } = formData;

    const clearState = () => {
        setFormData({
            body: "",
            postId: "",
        });
    };

    const dispatch = useDispatch();

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(createComment(formData));
        clearState();

    };

    return (
        <div className="form-create-comment">
            <>
                <Form>
                    <Form.Item
                        rules={[
                            {
                                required: true,
                                message: "Please, say something",
                            },
                        ]}
                    >
                        <div className="input-form1">
                            <Input
                                className="input"
                                name="body"
                                value={body}
                                onChange={onChange}
                                placeholder="Say something about it"
                            />
                            <Button type="primary" htmlType="submit" style={{
                                border: "2px solid lightGray",
                                background: "transparent",
                                color: "#47311d",
                            }}
                                onClick={onSubmit}>
                                Send
                            </Button>
                        </div>
                    </Form.Item>
                </Form>
            </>
        </div>
    );
};

export default AddComment
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createComment, getComments } from '../../../features/comments/commentsSlice';
import { getAll } from '../../../features/posts/postsSlice';
import { Form, Input, Button } from "antd";

const AddComment = () => {
    const { _id } = useParams();
    // const [setOpen] = useState(false);
    const [formData, setFormData] = useState({
        comment: "",
        postId: _id,
    });

    const { comment } = formData;

    const clearState = () => {
        setFormData({
            comment: "",
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
        // setOpen(false);
        clearState();

    };

    useEffect(() => {
        getAll();
        getComments();
    }, []);

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
                                name="comment"
                                value={comment}
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
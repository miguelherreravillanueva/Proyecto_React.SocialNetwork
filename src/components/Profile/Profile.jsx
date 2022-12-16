import React from 'react'
import { useSelector } from 'react-redux'
import { PlusOutlined } from '@ant-design/icons';
import { Form, Upload, } from 'antd';

const Profile = () => {
  const { user } = useSelector((state) => state.auth)

  if (!user) {
    return <p>Loading...</p>
  }
  return (
    <div>
      <h3>My profile</h3>
      <Form.Item label="Upload" valuePropName="fileList">
        <Upload action="/upload.do" listType="picture-card">
          <div>
            <PlusOutlined />
            <div
              style={{
                marginTop: 8,
              }}
            >
              Upload
            </div>
          </div>
        </Upload>
      </Form.Item>
      <p>Name: {user.user.name}</p>
      <p>Email: {user.user.email}</p>
    </div>
  )
}

export default Profile
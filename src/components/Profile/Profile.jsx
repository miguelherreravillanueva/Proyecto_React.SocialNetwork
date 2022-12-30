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
    <div className='profile'>
      <h3>{user.user.name}</h3>
      <Form.Item label="" valuePropName="fileList">
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
      
      <p>{user.user.email}</p>
    </div>
  )
}

export default Profile
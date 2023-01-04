import React from 'react'
import { useSelector } from 'react-redux'
import { Spin, Card } from 'antd';
import { MailOutlined, UserOutlined } from "@ant-design/icons"
import "./Profile.scss"


const Profile = () => {
  const { user } = useSelector((state) => state.auth)

  if (!user) {
    return <p>Loading...</p>
  }
  return (
    <div className="container-profile">

      {!user ?
        <Spin size="large" /> :
        <div className="site-card-border-less-wrapper ">

          <Card
            title={user.user.name}
            bordered={false}
            style={{
              width: 300,
              border: "1px solid gray",
              background: "transparent",
              color: "#47311d",
            }}
            >
            <UserOutlined/>
            <p><MailOutlined /> {user.user.email}</p>
            <br />
          </Card>
        </div>
      }
    </div>
  );
};

export default Profile
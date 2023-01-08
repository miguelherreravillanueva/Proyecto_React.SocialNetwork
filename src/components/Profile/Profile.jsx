import React from 'react'
import { useSelector } from 'react-redux'
import { Spin, Card, Avatar } from 'antd';
import { EditOutlined, UsergroupDeleteOutlined, SettingOutlined } from "@ant-design/icons"
import { Link } from "react-router-dom";
import "./Profile.scss"


const Profile = () => {
  const { user } = useSelector((state) => state.auth)
  const { Meta } = Card;

  if (!user) {
    return <p>Loading...</p>
  }
  return (
    <div className="container-profile">
      <br />

      {!user ?
        <Spin size="large" /> :
        <div className="site-card-border-less-wrapper ">
          <Card
            style={{
              width: 250,
            }}
            cover={
              <img
                alt="example"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkj6hvEG2-NPPdwc_KTYECZC2mqNUNGHP4JA&usqp=CAU"
              />
            }
            actions={[
              <div className='actions'>
                <span>
                  <Link to="*"><SettingOutlined /></Link>
                  <Link to="*"><EditOutlined /></Link>
                  <Link to="*"><UsergroupDeleteOutlined /></Link>
                </span>
              </div>
            ]}
          >
            <Meta
              avatar={<Avatar src="https://static.vecteezy.com/system/resources/previews/004/297/855/non_2x/abstract-blue-circle-shape-logo-concept-global-network-icon-template-blue-round-emblem-on-white-background-isolated-vetor-illustration-vector.jpg" />}
              title={user.user.name}
              description={user.user.email}
            />
          </Card>
        </div>
      }
    </div>
  );
};

export default Profile
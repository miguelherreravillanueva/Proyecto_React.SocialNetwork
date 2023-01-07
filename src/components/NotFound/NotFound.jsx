import React from 'react'
import { Button, Result } from 'antd';
import { Link } from "react-router-dom";
import "./NotFound.scss"

const NotFound = () => {
  return (
    <div className='notFound'>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Button type="primary" htmlType="submit" style={{
          border: "2px solid lightGray",
          background: "transparent",
          color: "#47311d",
        }}>
          <Link to="/">Back Home</Link>
        </Button>}
      />
    </div>
  )
}

export default NotFound
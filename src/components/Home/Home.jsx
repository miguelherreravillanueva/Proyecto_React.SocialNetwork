import React from 'react'
import AddPost from '../Posts/AddPost/AddPost';
import Posts from '../Posts/Posts'
import "./Home.scss";


const Home = () => {
  return (
    <div className="container-home">
      <AddPost/>
      <Posts/>
    </div>
  )
}

export default Home
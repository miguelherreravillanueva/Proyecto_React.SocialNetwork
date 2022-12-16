import React from 'react'
import Posts from '../Posts/Posts'
import "./Home.scss";


const Home = () => {
  return (
    <div className="container-home">
      <h3>Home</h3>
      <Posts/>
    </div>
  )
}

export default Home
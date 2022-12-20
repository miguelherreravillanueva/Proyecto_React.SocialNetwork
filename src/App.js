import React from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import PostDetail from './components/PostDetail/PostDetail';
import Search from './components/Search/Search';
import Footer from './components/Footer/Footer';
import Admin from './components/Admin/Admin';
import AddPost from './components/Posts/AddPost/AddPost';
import Posts from './components/Posts/Posts';
import EditPost from './components/EditPost/EditPost';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/addPost" element={<AddPost />} />
          <Route path="/post/:_id" element={<PostDetail />} />
          <Route path="/posts/" element={<Posts />} />
          
          <Route path="/update/" element={<EditPost />} />
          <Route path="/search/:postName" element={<Search />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;

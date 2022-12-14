import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
    const {user} = useSelector((state)=> state.auth)
  return (
    <div>
        <h3>My profile</h3>
        <p>{user.user.name}</p>
        <p>{user.user.email}</p>
    </div>
  )
}

export default Profile
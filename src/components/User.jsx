import React from 'react'
import { useParams } from 'react-router-dom'
useParams

const User = () => {
    const {userId, userName}= useParams()
  return (
    <div className='container'>
        <h4>User Profile</h4>
        <ul>
            <li>User Id: {userId}</li>
            <li>User Name: {userName}</li>
        </ul>
      
    </div>
  )
}

export default User
//useParms hook ley chai track garne kaam garxa URL through


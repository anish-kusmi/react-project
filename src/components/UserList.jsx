import React from 'react'
import { useNavigate } from 'react-router-dom'
useNavigate

const UserList = () => {
const navigate= useNavigate()
const users=[
    {id:1, name:'john'},
    {id:2, name:'Alex'},
    {id:3, name:'Ram'},
    {id:4, name:'Shyam'}
]
const handleUser=(userId, userName)=>{
    navigate(`/user/${userId}/${userName}`)
}
  return (
    <div className='container mt-5'>
        <h4>User List</h4>
        <ul>
          { users.map((user)=>(
            <li key={user.id} onClick={()=>handleUser(user.id, user.name)}>{user.name}</li>
          )
        )}  
        </ul>
    </div>
  )
}

export default UserList

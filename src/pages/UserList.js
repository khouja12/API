import axios from 'axios'
import React, { useState, useEffect } from 'react'
import UserCard from '../components/UserCard'
import './UserList.css'
const UserList = () => {
  const [Users, setUsers] = useState([])
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err => console.log(err)))
  }, [])


  return (
    <div style={{display:'flex' , flexDirection:'row', justifyContent:'space-around' , flexWrap:'wrap', padding:"10px",   }}>
      {Users.map((el)=> <UserCard User={el}  key={el.id} />)}

    </div>
  )
}

export default UserList

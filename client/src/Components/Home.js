import React from 'react'
import { useParams } from 'react-router-dom'
const Home = () => {
    const {email} = useParams()
  return (
    <div>
        <h1>Welcome to Home</h1>
        <h1>Your mail Id &nbsp;{email}</h1>
    </div>
  )
}

export default Home
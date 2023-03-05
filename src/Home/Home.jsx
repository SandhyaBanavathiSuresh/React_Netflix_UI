import React from 'react'
import Navbar from '../Components/Navbar'
import cover from '../Images/strangerthings.jpg'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <img src={cover} alt="" width="100%"/>
    </div>
  )
}

export default Home
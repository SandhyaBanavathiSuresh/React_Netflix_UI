import React from 'react'
import Feature from '../Components/Feature'
import List from '../Components/List'
import Navbar from '../Components/Navbar'
import supernaturals from "../Images/supernaturals.jpg";
import you from "../Images/you.jpg"

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Feature/>
        <List img={supernaturals} img1={you}/>
        <List img={you} img1={supernaturals}/>
        <List/>
        <List/>
        <List/>
    </div>
  )
}

export default Home
import React, { useState } from 'react'
import "./Navbar.scss"
import logo from "../Images/netflixLogo.png" 
import { AccountCircle, ArrowDropDown, Notifications, Search } from '@mui/icons-material';

const Navbar = () => {

// to set a use state for navbar on scroll to change its css from transparent to black    
    const[scrolled, setScrolled] = useState(false);

    window.onscroll = () =>{
        setScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    }
  return (
    <div className={scrolled ? 'navbar scroll' : 'navbar'}>
        <div className="container">
            <div className="left">
                <img src={logo} alt="netflix" />
                <span>Home</span>
                <span>TV Shows</span>
                <span>Movies</span>
                <span>New & Popular</span>
                <span>My List</span>
            </div>
            <div className="right">
                <Search className='icon'/>
                <span>Children</span>
                <Notifications className='icon'/>
                <AccountCircle className='icon'/>
                <div className='profile'>
                    <ArrowDropDown className='icon'/>
                    <div className="options">
                        <span>Settings</span>
                        <span>Logout</span>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Navbar
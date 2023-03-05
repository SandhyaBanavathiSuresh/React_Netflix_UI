import React, { useRef, useState } from 'react'
import '../Register/Register.scss'
import logo from '../Images/netflixLogo.png'

const Register = () => {
    
    const [email, setEmail] = useState("");
    const emailRef = useRef();
    const handleStart = () => {
        setEmail(emailRef.current.value)
    }
    
    const [password, setPassword] = useState("");
    const passwordRef = useRef();
    const handleFinish = () => {
        setPassword(passwordRef.current.value)
    }

  return (
    <div className='register'>
        <div className="top">
            <div className="wrapper">
                <img src={logo} alt="" className='logo'/>
                <button className="loginButton">Sign In</button>
            </div>
        </div>
        <div className="container">
            <h1>Unlimited Movies, TV Shows and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <p>
                Ready to watch? Enter your email to create or restart your membership.
            </p>
            {!email ? (
                <div className="input">
                    <input type="email" placeholder='email address' ref={emailRef}/>
                    <button className="registerButton" onClick={handleStart}>Get Started</button>
                </div>
            ):(
                <form className="input">
                    <input type="password" placeholder='password' ref={passwordRef}/>
                    <button className="registerButton" onClick={handleFinish}>Start</button>
                </form>
            )}
            
        </div>
    </div>
  )
}

export default Register
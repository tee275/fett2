import React from 'react';
import "./Login.css";
import { Link } from 'react-router-dom';
import Logo from "../../assets/Logo.png";
import { FaRegUser, FaUnlockAlt } from "react-icons/fa"

function Login() {
  return (
    <div className='Login-form'>
        <img src={Logo} className="Logo"/>
        <form action='' method='POST' className='form' id='form-login'> 
        <div className="login-user">
            <label className='label-control' htmlFor="username">
            </label>
                <input className='login-control'
                id='username'
                name='username'
                type="text"
                />
            </div>

            <div className="login-password">
                <label className='label-control' htmlFor="password">
                </label>
                <input className='login-control'
                id='password'
                name='password' 
                type="password"
                />
            </div>
            <div className='remember-password'>
                <input type="checkbox" className='check-box'></input>
                <span>Ghi nhớ mật khẩu</span>
            </div>
            <div className='btn'>
                <Link className='submit' to="/Home">
                    Đăng nhập
                </Link>
            </div>
            <div className='form-icon'>
            <i className="form-icon1">{<FaRegUser/>}</i>  
            <i className="form-icon2">{<FaUnlockAlt/>}</i> 
            
            </div>
        </form>
    </div>
  )
}

export default Login
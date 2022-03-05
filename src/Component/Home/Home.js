import React from 'react';
import Logo from "../../assets/Logo.png";
import { Link } from 'react-router-dom';
import "./Home.css";
import { HiOutlineLogout } from "react-icons/hi"
function Home() {
  return (
  <div className='Home-form'>
    <div className='home-header'>    
      <div className='btns'>
          <Link className='submits' to="/Home">
              <img src={Logo} className="Logo-home"/> 
          </Link>
      </div>
      <i className='title'>Nhà phát triển đô thị toàn diện</i>
      <div className='icon'>
        <Link className='login' to="/">
          <i className='icon1'>{<HiOutlineLogout/>}</i>
          ĐĂNG XUẤT
        </Link>
      </div>
      <hr/>
    </div>
    <div className='home-body'>
      <p className='event'>TIN TỨC - SỰ KIỆN</p>
      <p className='CTG-body'>CT GROUP</p>
      <p className='CTG-body1'>THỊ TRƯỜNG</p>
    </div>
    <hr className='line-body'/>
    <div className='home-footer'>
      <p className='business-sector'>LĨNH VỰC KINH DOANH</p>
      <p className='about'>VỀ CT GROUP</p> 
      <p className='information-channel'>KÊNH THÔNG TIN</p>
      <p className='conection'>LIÊN KẾT WEBSITE</p>
    <hr className='line-footer'/>
      <div className='copyright'>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        </link>
        <h>Coyright </h>
        <i  class="fa fa-copyright"> 2017</i>
        <p className='company'>TẬP ĐOÀN CT GROUP VIỆT NAM</p>
        <p className='address'>Tòa nhà Léman - 117 Nguyễn Đình Chiểu, Phường Võ Thị Sáu, Quận 3, TP.HCM - <b>Điện Thoại</b>: (+84 2B) 6297 1999 - <b>Fax</b>: (+84 2B) 6297 2000</p>
        <p className='email'><b>Email</b>: info@ctgroupvietnam.com - <b>Website</b>: ctgroupvietnam.com </p>
      </div>
      
    </div>

    
  </div>
    
  )
}
export default Home
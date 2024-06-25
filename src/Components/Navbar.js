import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../Assets/navbar_logo.svg'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CancelIcon from '@mui/icons-material/Cancel';
export default function Navbar() {

  const [toggle,settoggle]=useState("none")
  let changetoggle=()=>{
    
      settoggle("flex")

    

  }
  let closetoggle=()=>{
   
    settoggle("none")

  }
  return (
    <>
      <nav>
          <NavLink to="/" ><img className='logo_img' src={logo} alt="logo" /></NavLink>
          
       <div className="menu">
        <NavLink to="/" >Home</NavLink>
        <NavLink to="/product">Products</NavLink>
        <NavLink to="/about" >About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        </div>
        
        <div className="socialmedia">
        <NavLink to="/login">Login</NavLink>
          <NavLink to={"https://www.instagram.com/somnathgroupsurat?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="} ><InstagramIcon /></NavLink>
          
          <NavLink to={"https://www.facebook.com/profile.php?id=100095312258779"} ><FacebookIcon /></NavLink>
          <NavLink to={"https://www.linkedin.com/in/somnathtempleofficial"}><LinkedInIcon /></NavLink>
        </div>
        

      <button className='menubar'onClick={changetoggle}><MenuBookIcon/></button>
      <div className={`toggleevent toggle-${toggle}`}>
      <div className="togglemenu">
        <NavLink to="/" >Home</NavLink>
        <NavLink to="/product">Products</NavLink>
        <NavLink to="/about" >About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        </div>
        
        <div className="togglesm">
       
          <NavLink to={"https://www.instagram.com/somnathgroupsurat?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="} ><InstagramIcon /></NavLink>
          
          <NavLink to={"https://www.facebook.com/profile.php?id=100095312258779"} ><FacebookIcon /></NavLink>
          <NavLink to={"https://www.linkedin.com/in/somnathtempleofficial"}><LinkedInIcon /></NavLink>
        </div>
        <div className="logintoggle">
        <NavLink to="/login">Login</NavLink>
        
        </div>
        <div className="canceltoggle">
        <button onClick={closetoggle} className='togglecancel'><CancelIcon/></button>
        </div>
      </div>
      </nav>
      
    </>
  )
}

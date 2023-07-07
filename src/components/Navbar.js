import React from 'react';
import { NavLink } from 'react-router-dom';
import Dashboard from "./images/Dashboard-icon.png"
import Settings from "./images/setting_icon.png"
import Vector from "./images/Vector.png";
import Schedule from "./images/schedule_icon.png";
import Usericon from "./images/user_icon.png"

function Navbar() {
  return (
    <>
    <div className='navs'>
    <h1 className='headingBoardNav'>Board.</h1>

     <div className='navDivs'>
    <div className='navBlocks'>  
    <img src={Dashboard}/>  
    <NavLink className='navlink' to="/dashboard">
     Dashboard
    </NavLink>
    </div>
     
     <div  className='navBlocks'>
     <img src={Vector}/>
     <NavLink  className="navlink">
     Transactions
    </NavLink>
     </div>
    
<div  className='navBlocks'>
<img src={Schedule}/>
    <NavLink  className="navlink">
        Schedules
    </NavLink>
    </div>

<div  className='navBlocks'>
<img src={Usericon}/>
    <NavLink  className="navlink">
        Users
    </NavLink>
    </div>

<div  className='navBlocks'>
<img src={Settings}/>
    <NavLink  className="navlink">
        Settings
    </NavLink>
    </div>
    </div>
    <div className='bottomDiv'>
        <p className='bottomHead'>Help</p>
        <p className='bottomHead'>Contact Us</p>
    </div>
    </div>

    </>
  )
}

export default Navbar
import React from 'react'
import Navbar from './Navbar'
import Mask from "./images/Mask-icon.png"
import Bell from "./images/Bell-icon.png"
import Displaydivs from './Displaydivs'
import Charts from "./Charts"
import Piecharts from './Piecharts'
import Schedule from './Schedule'

function Dashboard() {
  return (
    <>
    <Navbar/>
    <div className='parentDiv'>
     <div className='childDiv'>
     <div>
     <p className='dashboardHead'>Dashboard</p>
     </div>

     <div className='childDiv2'>
     
     <form action="#">
                <input className='searchInput' type="text"
                    placeholder=" Search..."
                    name="search"/>
                    <i class="fa fa-search"></i>
                {/* <button>
                    <img src=''/>
                </button> */}
            </form>
            <img className='bell' src={Bell}/>
            <img className='mask' src={Mask}/>

     </div>

      {/* <Displaydivs/> */}
     </div>
     <Displaydivs/>
     <Charts/>
     <div className='chartsDiv'>
     <Piecharts/>
     <Schedule/>
     </div>
     </div>
    </>
  )
}

export default Dashboard
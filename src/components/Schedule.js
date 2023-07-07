import React from 'react'

function Schedule() {
  return (
    <div>
<div className='scheduleContent'>
<div className='seeall'>
  <h1 className='todaySchedule'>Today's Schedule</h1>
  <p className='seeallpara'>See all > </p>
</div>
  <div className='firstDiv'>
    <h3 className='scheduleHead'>
    Meeting with suppliers from Kuta Bali
    </h3>
    <p className='schedulePara'>14.00-15.00</p>
    <p className='schedulePara'>at Sunset Road, Kuta, Bali </p>
  </div>

  <div className='secondDiv'>
    <h3 className='scheduleHead'>
    Check operation at Giga Factory 1    </h3>
    <p className='schedulePara'>18.00-20.00</p>
    <p className='schedulePara'>at Central Jakarta  </p>
  </div>


</div>

    </div>
  )
}

export default Schedule
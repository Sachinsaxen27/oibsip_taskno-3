import React from 'react'
import './ToDostyle.css'
function WelcomePage() {
  return (
    <>
    <div className='welcomepage'>
        <div style={{margin:'0 auto', backgroundColor:"blue"}}>&nbsp;</div>
        <h1>Welcome to Your ToDo</h1>
        <p className='mx-3 my-3' style={{fontSize:"12px",color:'red'}}>Wait we will transfer you on Add ToDo page</p>
        <div className='welcome-space'>&nbsp;</div>
    </div>
    </>
  )
}

export default WelcomePage
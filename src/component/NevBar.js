import React from 'react'
import img from '../Assets/images/Screenshot 2024-02-02 181101.png'
import '../Assets/css/Nevbar.css';
export default function NevBar() {
  return (
    <div>
      <div className='nevbarmain' style={{height:'117px',width:"1728px",top:"-4px",position:"relative",display:"flex"}}>
        <img src={img} alt="this is the "style={{height:"117px",position:"relative",left:"50px"}}></img>
        <div style={{display:'flex',position:"relative", width:"100%",justifyContent:"right" ,alignItems:"center"}}>
            <div className='Nevbarheading' style={{marginRight:"50px",fontSize:"35px"}}>Program</div>
            <div className='Nevbarheading' style={{marginRight:"50px",fontSize:"35px"}}>Reviews</div>
            <div className='Nevbarheading' style={{marginRight:"50px",fontSize:"35px"}}>Features</div>
            <div className='Nevbarheading' style={{marginRight:"50px",fontSize:"35px"}}>Teaching</div>
            <div className='Nevbarheading' style={{marginRight:"50px"}}><button type="button" class="btn btn-outline-primary NevBarButton" style={{fontSize:"35px"}}>Free Masterclasses</button></div>
        </div>
      </div>
    </div>
  )
}

import React from 'react'
import '../Assets/css/page3.css';
import img from '../Assets/images/page3.1.jpg';
import img2 from '../Assets/images/page3.2.jpg';
export default function Page3() {
  return (
    <div style={{marginBottom:"100px"}}>
      <div className='page3heading1' style={{textAlign:"center",width:"1728px",marginTop:"50px"}}>Our Programs</div>
      <div className='page3heading2' style={{textAlign:"center",width:"1728px"}}>Ace Your Skills In Problem Solving In DSA, System Design And Developement</div> 
      <div  style={{width:"1728px",display:"flex",justifyContent:"center"}}>
    <div className='page3box1'>
        <div><img src={img} alt="this is the" className='page3img1'></img></div> 
        <div className='page3box12'>
            <div className='page3box12heading1' style={{textAlign:"center"}}>For College Students</div>
            <div className='page3box12heading2'>Who want to rocket-start their career and get placed in thier dream companies</div>
            <button type="button" class="btn btn-outline-primary page3button1" style={{fontSize:"35px"}}>View Program <i class="fa-solid fa-arrow-right"></i></button>
        </div>
    </div>
    </div>
    <div  style={{width:"1728px",display:"flex",justifyContent:"center",marginTop:"150px"}}>
    <div className='page3box1'>
        <div><img src={img2} alt="this is the" className='page3img1'></img></div> 
        <div className='page3box12'>
            <div className='page3box12heading1' style={{textAlign:"center"}}>For Working Professionals</div>
            <div className='page3box12heading2'>Who wish to shift to top product based companies and ace thier tech careers</div>
            <button type="button" class="btn btn-outline-primary page3button1" style={{fontSize:"35px"}}>View Program <i class="fa-solid fa-arrow-right"></i></button>
        </div>
    </div>
    </div>
    </div>
  )
}

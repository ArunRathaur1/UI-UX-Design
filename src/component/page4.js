import React from 'react'
import "../Assets/css/page4.css";
import img from '../Assets/images/page4.png';
import people from '../Assets/images/people.png';
import messagest from '../Assets/images/messagest.png';
import bulb from '../Assets/images/lightbulb.png';
import singlestream from '../Assets/images/singalstream.png';
import growth from '../Assets/images/growth.png';
export default function Page4() {
  return (
    <div style={{height:"1100px"}}>
      <div className='page4heading1'>Bosscoder end-to-end solutions</div>
      <div style={{width:"100%",display:"flex",justifyContent:"center"}}>
      <div className='page4heading2'>to give you an immersive learning experience and help you ace  in your tech career</div>
    </div>
    <div style={{display:"flex",gap:"50px",marginTop:"-100px"}}>
        <div className='page4table1' style={{paddingLeft:"50px",paddingTop:"50px"}} >
        <div style={{display:"flex"}}><img src={people} style={{width:"50px",paddingBottom:"40px"}}alt="thi is the "></img> <div className='heading1'>World-class curriculam, designed by industry experts</div></div>
        <div style={{display:"flex"}}><img src={singlestream} style={{width:"50px",paddingBottom:"40px"}}alt="thi is the "></img><div className='heading1'>live classes by intructors working in top teck compies</div></div>
        <div style={{display:"flex"}}><img src={bulb} style={{width:"50px",paddingBottom:"40px"}}alt="thi is the "></img><div className='heading1'>daily hand picked problems & weekly contents with quick doubbt solving</div></div>
        <div style={{display:"flex"}}><img src={messagest} style={{width:"50px",paddingBottom:"40px"}}alt="thi is the "></img><div className='heading1'>regular 1 : 1 Mentorship sessions and Mock interviews</div></div>
        <div style={{display:"flex"}}><img src={growth}style={{width:"50px",paddingBottom:"40px"}}alt="thi is the "></img><div className='heading1'>develop industry-relevant projects based on real-world examples</div></div>
        </div>
        <div><img src={img} alt="thi si the" className='page4imgage1'></img></div>
    </div>
    </div>
  )
}

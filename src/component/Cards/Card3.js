import React from 'react'
import img from '../../Assets/images/page3.png';
import '../../Assets/css/Card.css';
import topcoma from'../../Assets/images/topcoma.png';
import bottomcoma from '../../Assets/images/bottomcoma.png';
export default function Card1() {
  return (
    <div style={{width:"1728px",display:"flex",justifyContent:"center"}}>
      <div className='Card1div1'>
        <div style={{display:"flex",gap:"100px"}}>
            <div><img src={img} className='CardImg' alt="thi is the img"></img></div>
            <div>
                <div className='CardName'>Mannu</div>
                <div className='Cardjob'>UI/UX Designer</div>
            </div>
        </div>
        <div style={{display:"flex",justifyContent:"center"}}>
        <img src={topcoma} alt="this is the "className='cardcoma' style={{position:"relative",top:"100px",left:"-30px",height:"50px"}}></img>
        <div className='CardDescription'>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
        <img src={bottomcoma} alt="this is the "className='cardcoma' style={{height:"50px",position:"relative",left:"50px",top:"50px"}}></img>
        </div>
        </div>
        <div className='CardReadMore'>Read More</div>
      </div>
    </div>
  )
}
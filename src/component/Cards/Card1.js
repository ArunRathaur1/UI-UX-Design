import React from 'react'
import '../../Assets/css/Card.css';
import topcoma from'../../Assets/images/topcoma.png';
import bottomcoma from '../../Assets/images/bottomcoma.png';
import akhil from '../../Assets/images/akhil.jpg';
export default function Card1() {
  return (
      <div style={{width:"1728px",display:"flex",justifyContent:"center"}}>
      <div className='Card1div1'>
        <div style={{display:"flex",gap:"100px"}}>
            <div><img src={akhil} className='CardImg' alt="thi is the img"></img></div>
            <div>
                <div className='CardName'>Akhil Reddy</div>
                <div className='Cardjob'>Software Engenier At Recro</div>
            </div>
        </div>
        <div style={{display:"flex",justifyContent:"center"}}>
        <img src={topcoma} alt="this is the "className='cardcoma' style={{position:"relative",top:"100px",left:"-30px",height:"50px"}}></img>
        <div className='CardDescription'>
       <div> 
        Bosscoder acadmey made me a complete software engineer.</div>
        I was working in infosys & was  struggling to crack the product companies due to lack of understanding in DSA and system design.
        <img src={bottomcoma} alt="this is the "className='cardcoma' style={{height:"50px",position:"relative",left:"50px",top:"50px"}}></img>
        </div>
        </div>
        <div className='CardReadMore'>Read More</div>
      </div>
      </div>
  )
}

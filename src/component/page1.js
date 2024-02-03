import React from 'react'
import Img from '../Assets/images/bakground1.png'
import '../Assets/css/page1.css';
export default function Page1() {
  return (
    <>
    <div className='page1background' style={{width:"1728px",height:"1020px",overflow:"hidden"}}>
    <div style={{width:"891px",height:"874px", background: "rgba(217, 217, 217, 0.4)",borderRadius:"50%",position:"relative",top:"79px",left:"929px"}}></div>
    <img src={Img} alt="this is the first " style={{width:'1279px',height:"908px",position:'relative',top:"-750px",left:'713px'}}></img>
    </div>
    <div>
    <div className='page1heading1'>Grab Your <span style={{color:"black"}}>Dream</span> Tech Offer today</div>
    <ul className='page1heading2'><li>A highly structured,personalized and guided word-class program</li></ul>
    <ul className='page1heading3'><li>Designed by industry expertst</li></ul>
    <ul className='page1heading4'><li>That will make you the best software developer out there</li></ul>
    <ul className='page1heding5'><li>For ambition learners, who don't want to settle for anything less in their tech careers</li></ul>
    <button type="button" class="page1button">Apply Now</button>
    </div>
    </>
  )
}

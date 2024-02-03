import React from 'react'
import img from '../Assets/images/Screenshot 2024-02-02 181101.png'
import '../Assets/css/footer.css';
export default function Footer() {
  return (
    <div style={{display:"flex",gap:"175px",marginTop:"100px",marginBottom:"100px"}}>
      <div>
        <div><img src={img} style={{width:"328px",height:"170px",position:"relative",left: "103px"}} alt="this is the"></img></div>
        <div  className='footerleft'>Helping ambitious learners upskill themselves & shift to top product based companies</div>
      </div>
      <div style={{position:"relative",left:"150px"}}>
        <div style={{width:"400px"}}>
        <div className='footerheading1'>About</div>
        <div className='footercontent1' style={{paddingTop:"20px"}}>About Us</div>
        <div className='footercontent1'>Contact Us</div>
        <div className='footercontent1'>Term Of Use</div>
        <div className='footercontent1'>Refund Policy</div>
        <div className='footercontent1'>Privacy Policy</div>
      </div>
      </div>
        <div>
            <div className='footerheading1' style={{width:"250px"}}>Useful Links</div>
            <div className='footercontent1' style={{paddingTop:"20px"}}>Instagram</div>
            <div className='footercontent1'>Facebook</div>
            <div className='footercontent1'>Linkdin</div>
            <div className='footercontent1'>Telegram</div>
            <div className='footercontent1'>Youtube</div>
        </div>
    </div>
  )
}

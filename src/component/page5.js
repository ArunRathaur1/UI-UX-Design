import React from 'react'
import '../Assets/css/page5.css';
import logo1 from '../Assets/images/page5logo1.png';
import logo2 from '../Assets/images/page5logo2.png';
import logo3 from '../Assets/images/page5logo3.png';
import logo4 from '../Assets/images/page5logo4.png';
export default function Page5() {
  return (
    <div style={{background:"rgba(245, 249, 255, 1)",width:"1728px",paddingTop:"50px",paddingBottom:'20px'}} >
      <div className='page5heading1' style={{width:"1728px",textAlign:"center",paddingTop:"20px"}}>Placement and Career Support</div>
      <div style={{display:"flex",justifyContent:'center',width:"1728px"}}>
      <div className='page5heading2'>Helping students get exposed to a world opportunitities</div>
      </div>
      <div style={{display:"flex",gap:"60px",width:"1728px",marginTop:'70px'}}>
        <div className='page5box1' style={{position:"relative",width: "339px",height: "418px",marginLeft:"100px",background:'white'}}>
            <div style={{display:'flex',justifyContent:"center",marginTop:'30px'}}>
            <img src={logo1} style={{width:"127px",height:"99px"}} alt="this is the"></img>
            </div>
            <div className='page5boxheading'>Career portfolio optimization</div>
            <div style={{display:"flex",justifyContent:"center"}}>
            <div className='page5boxbox'>
            <div className='page5boxcontent'>Referrals and Career Tips by 400+ Alumni and Mentors from top product-based companies</div>
            </div>
            </div>
        </div>
        <div className='page5box1' style={{position:"relative",width: "339px",height: "418px",background:'white'}}>
            <div style={{display:'flex',justifyContent:"center",marginTop:'30px'}}>
            <img src={logo2} style={{width:"127px",height:"99px"}}alt="this is the"></img>
            </div>
            <div className='page5boxheading'>Extensive Support by Alumni-Mentor Network</div>
            <div style={{display:"flex",justifyContent:"center"}}>
            <div className='page5boxbox'>
            <div className='page5boxcontent'>Referrals and Career Tips by 400+ Alumni and Mentors from top product-based companies</div>
            </div>
            </div>
        </div>
        <div className='page5box1' style={{position:"relative",width: "339px",height: "418px",background:'white'}}>
            <div style={{display:'flex',justifyContent:"center",marginTop:'30px'}}>
            <img src={logo3} style={{width:"127px",height:"99px"}}alt="this is the"></img>
            </div>
            <div className='page5boxheading'>Placement opportunities</div>
            <div style={{display:"flex",justifyContent:"center"}}>
            <div className='page5boxbox'>
            <div className='page5boxcontent'>Referrals and Career Tips by 400+ Alumni and Mentors from top product-based companies</div>
            </div>
            </div>
        </div>
        <div className='page5box1' style={{position:"relative",width: "339px",height: "418px",background:'white'}}>
            <div style={{display:'flex',justifyContent:"center",marginTop:'30px'}}>
            <img src={logo4} style={{width:"127px",height:"99px"}} alt="this is the"></img>
            </div>
            <div className='page5boxheading'>Mock interviews</div>
            <div style={{display:"flex",justifyContent:"center"}}>
            <div className='page5boxbox' >
            <div className='page5boxcontent'>Referrals and Career Tips by 400+ Alumni and Mentors from top product-based companies</div>
            </div>
            </div>
        </div>
      </div>
      <div style={{display:'flex',justifyContent:'center',width:"1728px",marginTop:"180px",marginBottom:"50px"}}>
      <div><button type="button" class="btn btn-outline-primary buttonpage5" style={{fontSize:"30px",width:"247px",height:'78px',fontWeight:"700",fontFamily:"poppins",borderRadius:"13px"}}>Know More</button></div>
      </div>
    </div>
  )
}

import React from 'react'
import img from '../Assets/images/Screenshot 2024-02-02 181101.png'
import '../Assets/css/Nevbar.css';
export default function NevBar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#"><img src={img} style={{width:'30%'}}></img></a>
  <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{display :"flex",justifyContent:"right",gap:"7%"}}>
      <div  className='Nevbarheading'>Programs</div>
      <div className='Nevbarheading'>Reviews</div>
      <div className='Nevbarheading'>Features</div>
      <div className='Nevbarheading'>Teaching</div>
      <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Free Masterclasses</button>
  </div>
</nav>
</>
  )
}

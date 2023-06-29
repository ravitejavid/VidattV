import React from 'react'
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from 'react-router-dom';
function Map() {
  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'center',width:'100vw',height:'100vh'}}>
      <div >

      <div className="button1" style={{marginBottom:'2%'}}>
                  <Link to='/contact' style={{color:'white', textDecoration: 'none'}}>Back to contact</Link>
                </div>
      <iframe style={{width:'80vw',border:0,height:'70vh'}}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.6685588241303!2d77.53798591064381!3d12.99303828727141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d7de8abc7f5%3A0x6f56e05708a35fc1!2sVidatt%20Data%20Analytics%20Private%20Limited!5e0!3m2!1sen!2sin!4v1684150765211!5m2!1sen!2sin"
          width="600"
          height="450"
          // style={{border:0}}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
     
    </div>
  )
}

export default Map

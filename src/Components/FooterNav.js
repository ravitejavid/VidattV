import { Grid } from '@mui/material'
import React from 'react'
import vidatt1 from '../imgs/vid1.svg'
import '../Components/FooterNav.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useLocation,NavLink } from 'react-router-dom';

function FooterNav() {
  const useLoc = useLocation()
  return (
    <div>
        <Grid container>
         <Grid item xs={12}  sm={12} md={6}>
       <div className='footerN1'>
        <div>
            <img src={vidatt1} alt="" />
        </div>

        <div className='footernItems'>
            <NavLink exact to="/about" className={(useLoc.pathname === '/about') ? 'actAbout' : 'FoterNavilink'}>AboutUs</NavLink>
            <NavLink exact to="/trf"  className={(useLoc.pathname === '/face' || useLoc.pathname === '/trf' ) ? 'actAbout' : 'FoterNavilink'}>Products</NavLink>
            <NavLink exact to="/Careers" className={(useLoc.pathname === '/Careers') ? 'actAbout' : 'FoterNavilink'}>Careers</NavLink>
            <NavLink  exact to="/contact"   className={(useLoc.pathname === '/contact') ? 'actAbout' : 'FoterNavilink'}>ContactUs</NavLink>
        </div>
       </div>
         </Grid>
         <Grid item xs={12} sm={12} md={6}>
         <div className='footerN2'>
        <div>
           <div>Request a Demo</div>
           {/* <h2 style={{textAlign:'center'}}>Demo</h2> */}
        </div>

        <div className='footerRight'>
          <div className='footernItems1'>
          <div>
              <input type="email" placeholder='Your Emails'/>
            </div>
            <div className='sendemil'>
                <ArrowForwardIcon />
            </div>
          </div>
           
        </div>
       </div>
         </Grid>
        </Grid>
      
      <div className='footerlast'>
        <div>@2020 vidatt | All rights reserved </div>
      </div>
    </div>
  )
}

export default FooterNav

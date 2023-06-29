import React from 'react'
import Aimg1 from '../../imgs/AboutUsimgs/Aimg1.png'
import './AboutUs.css'
import { Grid } from '@mui/material'
import Button from '@mui/material/Button';
import FooterNav from '../FooterNav';
import Carosel3 from '../AboutFiles/Carosel3/Carosel3'
import Silk1 from './SilkCarosel/Silkcaro';

function VisionFounder() {
  return (
    <div>
      <Grid container >
        <Grid sm={12} md={3}>
        <div className='boxh2'>
            <div className='ourvis'>
            Our Vision
            </div>
        </div>
        </Grid>

        <Grid sm={12} md={8}>
            <div className='ourText'>
        <div className='box2text1'>
        Developing specialized video artificial intelligence solutions, based on our extensive knowledge 
        in Machine Vision and Machine Learning. Our focus is in providing reliable solutions to various 
        industry domains, by developing algorithms and leveraging available deep learning libraries including
         Caffee, TensorFlow, OpenCV.
        </div>
        </div>
        </Grid>

        <Grid  md={12}> 
        <div className='ourImg'>
        <img src={Aimg1} alt="" />
        </div>
         </Grid>
      </Grid>

      {/* Should add carosel  */}
    
{/* <Carosel3 /> */}
<Silk1 />
    <div >

        <div className='center1'>
            <div>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                       <div className='center boxh2'>
                        <div>We are Hiring!</div>
                       </div>
                    </Grid >

                    <Grid item sm={12} md={10}>
                    <div className='box2text1' style={{marginBottom:"2%"}}>
                        <div>We are growing fast and always looking for smart people. 
                            If you think you suit to any of the open roles, then join us</div>
                       </div>
                    </Grid>

                    <Grid item sm={12} md={2}>
                    <div className=''>
                        <div className='visButton1' style={{marginBottom:"5%"}}>
                            <Button variant="contained" sx={{background: '#003399',textTransform: 'capitalize'}}>ViewOpenPositions</Button></div>
                       </div>
                    </Grid>

                </Grid>

            </div>
        </div>

        <div  className='bigAlert'>
            <div className='bigAlertcontent'>
                <div  className='boxh2'>We are Hiring! </div>
                <div>
                    <div className='box2text1'>We are growing fast and always looking for smart people. 
                        If you think you suit to any of the open roles, then join us.
                    </div>
                </div>
            </div>

            <div>
            <Button variant="contained" sx={{background: '#003399',textTransform: 'capitalize'}}>ViewOpenPositions</Button>
            </div>
        </div>
        
    </div>

 <FooterNav />
    </div>
  )
}

export default VisionFounder

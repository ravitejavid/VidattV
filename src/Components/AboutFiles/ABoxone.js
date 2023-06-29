import { Grid } from '@mui/material'
import React from 'react'
import './AboutUs.css'
import AbouIcon1 from '../../imgs/AboutUsimgs/Aicon1.svg'
import AbouIcon2 from '../../imgs/AboutUsimgs/Aicon2.svg'
import AbouIcon3 from '../../imgs/AboutUsimgs/AAicon3.svg'
import AbouIcon4 from '../../imgs/AboutUsimgs/Aicon4.svg'

function ABoxone() {
  return (
    <div>
      <div className='Abt1'>
        <Grid container spacing={0}>
           <Grid item  md={6}>
               <div className='box1'>
                   <div className='box1l'>
                   <div className="boxh2">We build bridges</div>
                   <div className="boxh2">between ideas and reality</div>
                   </div>
               </div>
           </Grid>

           <Grid item  md={6}>
            <div  className='box2'>
                <div style={{width:'90%'}} >
                We are <b>leading AI Solution team</b>, dedicated to transforming businesses with 
             cutting-edge technology.Our team of experts is passionate about architecting
             and developing innovative AI solutions that enable businesses to make smarter
             decisions, imporve productivity,and enhance customer experiences.
                </div>
            </div>
           
           </Grid>
        </Grid>
      </div>
     {/* cards2 */}

     <div style={{background:'rgba(238, 244, 253, 1)'}} className='Aboutcardholder'>
        <Grid container spacing={0}>
            <Grid item sm={12} md={6} id='AccGrid'>
              <div className='acard'>
                <div>
                     <div className='acardimgs'>
                        <img src={AbouIcon1} alt="" />
                     </div>

                     <div className='box2text'>
                        Accurately designed solutions
                     </div>

                     <div className='box2text1'>
                     By using machine learning algorithms and other advanced 
                     techniques, Our AI can provide accurate and efficient solutions that
                      are designed to meet specific requirements.
                     </div>
                </div>
              </div>
            </Grid>
            <Grid item sm={12} md={6}>
            <div className='acard'>
                <div>
                     <div className='acardimgs'>
                        <img src={AbouIcon2} alt="" />
                     </div>

                     <div className='box2text'>
                     Flexible deployment and scaling 
                     </div>

                     <div className='box2text1'>
                     Our AI-based solutions provide flexible deployment and our scalable
                      solutions ensure that your business can keep up with evolving 
                      demands, without any disruption.
                     </div>
                </div>
              </div>
            </Grid>
        </Grid>

        <Grid container spacing={0}>
            <Grid item  sm={12} md={6} id='AccGrid'>
              <div className='acard'>
                <div>
                     <div className='acardimgs'>
                        <img src={AbouIcon3} alt="" />
                     </div>

                     <div className='box2text'>
                     Open APIs
                     </div>

                     <div className='box2text1'>
                     This Allows Seamless Integration both Upstream and Downstream 
                     Live Camera Feeds, Post-Analytics Results and Triggers and 3rd Party Platforms.
                     </div>
                </div>
              </div>
            </Grid>
            <Grid item sm={12} md={6}>
            <div className='acard'>
                <div>
                     <div className='acardimgs'>
                        <img src={AbouIcon4} alt="" />
                     </div>

                     <div className='box2text'>
                     Intuitive and customizable user interfaces
                     </div>

                     <div className='box2text1'>
                     Intuitive and customizable user interfaces are essential to providing a user-friendly
                      experience. They allow users to tailor their experience to their preferences, making
                       it easy to navigate and use. 
                     </div>
                </div>
              </div>
            </Grid>
        </Grid>
     </div>
    </div>
  )
}

export default ABoxone

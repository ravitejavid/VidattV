import { Grid,Button } from '@mui/material'
import React, { useState } from 'react'
import './Four.css'
import icon1 from '../../imgs/icon1.svg'
import icon2 from '../../imgs/icon2.svg'
import icon3 from '../../imgs/icon3.svg'
// import intel from '../../imgs/intel.svg'
// import raksul from '../../imgs/raksul.svg'
// import zinnum from '../../imgs/zinnum.svg'
// import datani from '../../imgs/datani.svg'
import groupic from '../../imgs/groupic.png'
import groupic1 from '../../imgs/groupic1.png'
import groupic2 from '../../imgs/groupic2.png'
import groupic3 from '../../imgs/groupic3.png'
// import footer from '../../imgs/footer.svg'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FixedScrool from './FixedImgAni/FixedScrool'
import Imagecarousel from '../Carosel2/Carosel2'

// import Carousel from '../../Marque/Carosel'

function Four() {
const [card1,setcard2] = useState(false)
  return (
    <div>
       <FixedScrool />
{/* <Anima1 /> */}
      {/* next div */}
      <div className='four2bg'>
        <h1>Generating impactful results in an instant.</h1>
        <Grid container spacing={5} >
            <Grid item xs={12} sm={6} md={4} >
               <div className='fourcard'>
                   <div className='fourcontent'>
                    <div><img src={icon1} alt="" /></div>
                    <h2>Upload your data</h2>
                    <div>[First step]Upload your raw data so we can go to next step.</div>
                   </div>
               </div>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
               <div className='fourcard1'>
                   <div className='fourcontent'>
                    <div><img src={icon2} alt="" /></div>
                    <h2>We analyze it </h2>
                    <div>We use our data visualisation to your raw data.Results will be shown in real time</div>
                   </div>
               </div>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
               <div className='fourcard2'>
                   <div className='fourcontent'>
                    <div><img src={icon3} alt="" /></div>
                    <h2>Report is generated</h2>
                    <div>A detailed Report will be generated on the processed data</div>
                   </div>
               </div>
            </Grid>

        </Grid>
      
      </div>
  {/* marque images */}
      <div className='marqueheading'>
       <div style={{textAlign:'center'}}>Our Products are used by </div>
       <div style={{textAlign:'center'}}>industry leaders</div>
       </div>
      <div class="marquee">
  <div class="marquee--inner">
    <span>
    <img src={groupic} alt="Image 1" />
    <img src={groupic1} alt="Image 2" />
       <img src={groupic2} alt="Image 3" />
       <img src={groupic3} alt="Image 3" />
    </span>
    <span>
    <img src={groupic} alt="Image 1" />
    <img src={groupic1} alt="Image 2" />
       <img src={groupic2} alt="Image 3" />
       <img src={groupic3} alt="Image 3" />
    </span>

  </div>
</div>

{/* carosel card */}
<Imagecarousel />
<div className='footer-img'>
{/* <img src={footer} alt="" /> */}
<div className='centerfooter'>

      <h2 style={{textAlign:'center'}}>Got An Idea?</h2>
      <h2>Let's make it a reality</h2>
      <div className='btn4center'>
      {/* <div className='buttonIcon'>
        <div>Lets Craft together</div>
        <div><ArrowForwardIcon className='icon4'/> </div>
      </div> */}


      {/* <div>
      <div className='button1'>
      <div className='buttonFont'>Lets Craft together</div>
      <ArrowForwardIcon />
      </div>



      </div> */}

      
<div>
      {/* <div className='button1'>
      <div>Lets Craft together</div>
      <ArrowForwardIcon />
      </div> */}
 <Button variant="contained" id='buttonfour'>
 Lets Craft together
 <ArrowForwardIcon sx={{marginLeft:'10px'}}/>
      </Button>
      </div>
      </div>
 
</div>
</div>
{/* <Carousel /> */}
    </div>
  )
}

export default Four

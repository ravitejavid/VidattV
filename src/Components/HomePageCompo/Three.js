import { Grid } from '@mui/material'
import React from 'react'
import Dash from '../../imgs/groupic4.svg'
import './Three.css'
import Button from '@mui/material/Button';

function Three() {
  return (
    <div>
      <Grid container sx={{  backgroundColor: 'rgba(226, 235, 254, 1)'}}>
       <Grid item sm={12} md={6} >
        <div className='threeitem'>
            <div className='three1'>
            <h5 className='cust1'>Custom build products</h5>
            <div className='boxh2'>Making Your ideas a tangable truth</div>

            <div className='threT'>
            At <b>Vidatt,</b>  we understand that every customer has unique 
            requirements and preferences. That's why we offer custom
             build products that cater to your individual needs and 
             specifications.
            </div>

            <div className='threT'>
            Our team of experts will work closely with you to design and create
             a product that perfectly fits your requirements and exceeds your expectations.
            </div>

            <div>
                <div className='button1'>
                <div>Tell us your Idea</div>
              
                </div>

            </div>
            </div>
        </div>
       </Grid>

       <Grid item sm={12} md={6} >
<div className='threeimg'>
<img src={Dash} alt="" />
</div>

       </Grid>
      </Grid>
    </div>
  )
}

export default Three

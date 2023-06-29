import React from 'react'
import Navbar from '../Navbar'
import { Button, Grid } from '@mui/material'
import T1 from '../../imgs/Traffic/T1.png'
import T2 from '../../imgs/Traffic/T2.svg'
import T3 from '../../imgs/Traffic/T3.png'
import t4 from '../../imgs/Traffic/t4.svg'
import T5 from '../../imgs/Traffic/T5.png'
import T6 from '../../imgs/Traffic/T6.png'
import T7 from '../../imgs/Traffic/T7.png'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import './Product.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FooterNav from '../FooterNav'
import { useTypewriter,Cursor} from 'react-simple-typewriter'

function Traffic() {
    const [text1] = useTypewriter({
        words:['Actionable intelligence','Operational insights'],
        loop:{},
        typeSpeed:40,
        deleteSpeed:40,
    
    })
  return (
    <div>
      <Navbar />

     <div className='Tdiv1'>
        <Grid container spacing={2}>
           <Grid item xs={12} sm={12} md={7}>
            <div className='face1l T1' >
            <div className='traf1'>
            <div style={{display:'flex',alignItems:'center'}}>
                    <div className='topsecf'>
                        <div>Our products</div>
                        <ArrowRightAltIcon/>
                    </div>
                    <div className='topsecf1'>Drone inspection software</div>
                </div>
                <div className='faceh2text'>Transform your drone data into</div>
                <div className="faceh2yellow">
                    {text1} <a style={{color:"#ff7f50"}}> |</a>
               
                </div>
                {/* <div className='faceh2yellow'>Actionable intelligence</div> */}
                {/* <div className="animated-textTRF1">
                  {" "}
                  <span></span>
                </div> */}
                <div className='faceh2text'>with our Analytics software</div>

                <div className='facePtext'>With advanced data processing capabilities and powerful machine learning algorithms, Our industry-leading drone
                     data analytics platform is designed to revolutionize the way businesses collect, analyze, and use aerial data.</div>

                     <div className='button1'>
                <div>Get a demo</div>
                </div>
              </div>
            </div>
              
           </Grid>

           <Grid item xs={12} sm={12} md={5}>
               <div className='face1l T1'>
                <img src={T1} alt="" />
               </div>
           </Grid>
        </Grid>
     </div>

     <div className="T2div">

        <Grid container spacing={2}>
         <Grid item xs={12} sm={6} md={4}>
            <div className='face1l' >
                <div className='fcard2'>
                <div>
                    <div style={{width:'15%',marginTop:'2%'}}> <img src={T2} alt="" /> </div>
                    <div className='fcardh2'>Data import & management</div>

                    <div className='fcardP'>Our platform will be able to import data drones and
                     importing data collected by drones such as aerial images, sensor data, or
                      video footage, into the platform.our platform also ensure that the data is
                       accurate, consistent, and usable.
                    </div>
                </div>
                </div>
            </div>

         </Grid>


         <Grid item xs={12} sm={6} md={4}>
            <div className='face1l' >
                <div className='fcard2'>
                <div>
                    <div style={{width:'15%',marginTop:'2%'}}> <img src={T3} alt="" /> </div>
                    <div className='fcardh2'>Data Visualisation & processing</div>

                    <div className='fcardP'>
                    Our platform uses advanced data processing algorithms to identify patterns, trends, and anomalies in the data. We also employ data visualization techniques to 
                    present the processed data in an easily 
                    understandable format.
                    </div>
                </div>
                </div>
            </div>

         </Grid>

         <Grid item xs={12} sm={6} md={4}>
            <div className='face1l' >
                <div className='fcard2'>
                <div>
                    <div style={{width:'15%',marginTop:'2%'}}> <img src={t4} alt="" /> </div>
                    <div className='fcardh2'>Assign, Schedule & manage your tasks </div>

                    <div className='fcardP'>
                    Our platform is designed to help you efficiently assign, schedule, 
                    and manage your tasks. With its user-friendly interface, you can 
                    easily input all of your tasks, set deadlines, and assign them to team members. 
                     </div>
                </div>
                </div>
            </div>

         </Grid>

         <div className='face1l' style={{width:'100%'}}>
            <div>
            <Button variant="outlined" style={{textTransform:'capitalize',color: '#003399',border:'1px solid #003399'}}>
                    Know more about our platform
                </Button>
            </div>
         </div>
        </Grid> 
            
     </div>

     {/* <div className="f3div">

        <div className='f3card1'>
            <div>
                Cutting edge AI
            </div>
        </div>

        <div> <img src={T5} alt="" /> </div>

        <div className='f3card1'>
            <div>
                Real time face identification
            </div>
        </div>

        <div> <img src={T6} alt="" /> </div>

        <div className='f3card1'>
            <div>
                Our lighting fast Face recognition
            </div>
        </div>
     </div> */}

{/* This is important card */}
<div className="T4div">
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6}>
            <div className='f4lcard'>
                <div>
                    <div className='f4lcont'>
                        <div className='f4l1t'>High-quality data processing</div>
                        <div className='faceh2text'>High-Quality Processing makes all the difference</div>
                        <div className='f4p'>
                        With the help of advanced data processing techniques, we can ensure that the
                         data collected by our drones is cleaned, validated, and transformed into 
                         usable information that can be used to make informed decisions. This includes
                          removing errors and inconsistencies, converting raw data into meaningful
                           insights, and identifying patterns and trends that might not be immediately
                            apparent.
                        </div>

                        <div className='f4p'>
                        By using high-quality data processing techniques, we can provide outputs
                         with accurate and actionable data that can help to optimize the operations,
                          improve efficiency, and reduce costs.
                        </div>

                        <div>
                        <div className='button1'>
                <div>Get a demo</div>
                </div>
                        </div>
                    </div>
                </div>
            </div>
            </Grid>

            <Grid item xs={12} sm={12} md={6}>
            <div className='f4img'>
                <img src={T5} alt="" />
            </div>
            </Grid>
        </Grid>
</div>



{/* f5card */}

        <div className="f5div">
        <Grid container spacing={2}>

        <Grid item xs={12} sm={12} md={6}>
       <div className='f4img'>
        <img src={T6} alt="" />
       </div>
    </Grid>


    <Grid item xs={12} sm={12} md={6}>
    <div className='f4lcard'>
        <div>
            <div className='f4lcont'>
                <div className='f4l1t'>Accurate and Fast Data Analysis</div>
                <div className='faceh2text'>Effortlessly analyze your drone data</div>
                <div className='f4p'>
                Accurate and fast data analysis is critical in the success of our drone data
                 analytics platform. With large amounts of data being generated from drone 
                 flights, the ability to quickly and accurately analyze this data allows our
                  users to make informed decisions in a timely manner. Our platform leverages
                   advanced algorithms and machine learning techniques to extract insights from
                    drone data quickly and accurately.
                </div>

                {/* <div className='f4p'>
                Our software is designed with high accuracy and speed in mind, making it suitable for a variety of applications, 
                including security, access control, and personalized marketing.
                </div> */}

                <div>
                <div className='button1'>
                <div>Get a demo</div>
                </div>
                </div>
            </div>
        </div>
    </div>
    </Grid>

    
</Grid>
        </div>


        <div className="T6div">
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6}>
            <div className='f4lcard'>
                <div>
                    <div className='f4lcont'>
                        <div className='f4l1t'>Schedule tasks and Manage teams</div>
                        <div className='faceh2text'>Streamline and manage your teams & workflows</div>
                        <div className='f4p'>
                        With our user-friendly interface, you can easily assign tasks and monitor progress 
                        in real-time, ensuring that your team stays on track and meets deadlines. Whether
                         you have a small team or a large one, our platform has the tools you need to
                          streamline your workflow and maximize productivity. Get a demo to see how our 
                          scheduling and team management features can benefit your business.

                        </div>

                        {/* <div className='f4p'>
                        This level of accuracy and precision makes our face detection tool an invaluable asset 
                        for a wide range of applications, from security and surveillance to marketing and entertainment.
                        </div> */}

                        <div>
                        <div className='button1'>
                <div>Get a demo</div>
                </div>
                        </div>
                    </div>
                </div>
            </div>
            </Grid>

            <Grid item xs={12} sm={12} md={6}>
            <div className='f4img'>
                <img src={T7} alt="" />
            </div>
            </Grid>
        </Grid>

        </div>

{/* This below code is from Four page  */}

        <div className='footer-img2'>
{/* <img src={footer} alt="" /> */}
<div className='centerfooter'>

      <h2 style={{textAlign:'center'}}>Interested in our product?</h2>
      {/* <h2>Let's make it a reality</h2> */}
      <div className='btn4center'>
      <div className='buttonIcon'>
        <div>Get in touch</div>
        {/* <div><ArrowForwardIcon className='icon4'/> </div> */}
      </div>
      </div>
 
</div>
</div>


{/* final footer nav */}

<FooterNav />
    </div>
  )
}

export default Traffic

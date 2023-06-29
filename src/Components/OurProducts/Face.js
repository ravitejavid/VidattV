import React from 'react'
import Navbar from '../Navbar'
import { Button, Grid } from '@mui/material'
import f1 from '../../imgs/Face/f1.png'
import f2 from '../../imgs/Face/f2.png'
import f3 from '../../imgs/Face/f3.png'
import f4 from '../../imgs/Face/f4.png'
import f5 from '../../imgs/Face/f5.png'
import f6 from '../../imgs/Face/f6.png'
import f7 from '../../imgs/Face/f7.png'
import f8 from '../../imgs/Face/f8.png'
import f9 from '../../imgs/Face/f9.png'
import f10 from '../../imgs/Face/f10.png'
import './Product.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FooterNav from '../FooterNav'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useTypewriter,Cursor} from 'react-simple-typewriter'

function Face() {
    const [text1] = useTypewriter({
        words:['One-of-a-kind','State-of-a-Art'],
        loop:{},
        typeSpeed:40,
        deleteSpeed:40,
    
    })
  return (
    <div>
      <Navbar />

     <div className='Fdiv1'>
        <Grid container spacing={2}>
           <Grid item xs={12} sm={12} md={6}>
            
            <div className='face1l' >
                
            <div className='facesec1'>
            <div style={{display:'flex',alignItems:'center'}}>
                    <div className='topsecf'>
                        <div>Our products</div>
                        <ArrowRightAltIcon/>
                    </div>
                    <div className='topsecf1'>Face recognition software</div>
                </div>
                <div className='faceh2text'>Introducing lighting fast</div>
                <div className="faceh2yellow">
                    {text1} <a> | </a>
               
                </div>
                {/* <div className='faceh2yellow'>One-of-a-kind</div> */}
                {/* <div className="animated-textface1">
                  {" "}
                  <span></span>
                </div> */}
                <div className='faceh2text'>Face recognition software</div>

                <div>Know who's who in an instant with our powerful face recognition tool.</div>

                <div className='button1'>
                <div>Get a demo</div>
                </div>
               {/* <Button variant="contained" id='buttonfour' sx={{width:'30%'}}>
               Get a demo
             </Button> */}
              </div>
            </div>
              
           </Grid>

           <Grid item xs={12} sm={12} md={6}>
               <div className='face1l onef'>
                <img src={f1} alt="" className='onef'/>
               </div>
           </Grid>
        </Grid>
     </div>

     <div className="f2div">

        <Grid container spacing={2}>
         <Grid item xs={12} sm={6} md={4}>
            <div className='face1l' >
                <div className='fcard1'>
                <div>
                    <div style={{width:'15%',marginTop:'2%'}}> <img src={f10} alt="" /> </div>
                    <div className='fcardh2'>Verify faces</div>

                    <div className='fcardP'>Our face recognition software utilizes advanced algorithms and machine 
                        learning techniques which is trained on large data sets of human faces
                         to accurately detect faces in images and video streams.</div>
                </div>
                </div>
            </div>

         </Grid>


         <Grid item xs={12} sm={6} md={4}>
            <div className='face1l' >
                <div className='fcard1'>
                <div>
                    Real time face recognition<div style={{width:'15%',marginTop:'2%'}}> <img src={f8} alt="" /> </div>
                    <div className='fcardh2'>Search faces</div>

                    <div className='fcardP'>The leading-edge AI technology used in face recognition software has revolutionized the 
                    way we search for and identify individuals. we can now search for faces more accurately and efficiently than ever before.
                    </div>
                </div>
                </div>
            </div>

         </Grid>

         <Grid item xs={12} sm={6} md={4}>
            <div className='face1l' >
                <div className='fcard1'>
                <div>
                    <div style={{width:'15%',marginTop:'2%'}}> <img src={f9} alt="" /> </div>
                    <div className='fcardh2'>compare faces</div>

                    <div className='fcardP'>Face recognition software has revolutionized the way we compare two faces for identification
                     purposes. With high level of accuracy and quickly analyzing large sets of data, Our software can accurately determine 
                     whether two faces belong to the same person or not. </div>
                </div>
                </div>
            </div>

         </Grid>

         <div className='face1l' style={{width:'100%'}}>
            <div>
                <Button variant="outlined" style={{textTransform:'capitalize',color: '#003399',border:'1px solid #003399',background:'white'}}>
                    Know more about our platform
                </Button>
            </div>
         </div>
        </Grid> 
            
     </div>

     <div className="f3div">

        <div className='f3card1'>
            <div>
                Cutting edge AI
            </div>
        </div>

        <div className='imgPlus'>
             <img src={f2} alt="" /> 
             </div>

        <div className='f3card1'>
            <div>
                Real time face identification
            </div>
        </div>

        <div> <img src={f3} alt="" /> </div>

        <div className='f3card1'>
            <div>
                Our lighting fast Face recognition
            </div>
        </div>
     </div>

{/* This is important card */}
<div className="f4div">
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6}>
            <div className='f4lcard'>
                <div>
                    <div className='f4lcont'>
                        <div className='f4l1t'>Real time face recognition</div>
                        <div className='faceh2text'>See it,scan it,recognize it</div>
                        <div className='f4p'>Using a camera or video feed, Our software with its advanced computer vision algorithms can detect human faces
                            in real-time and track their movements, even in low-light conditions or partially obstructed views. Once a face is detected,
                            the software can compare it to a database of known faces to identify the individual or determine if it's a new face.
                        </div>

                        <div className='f4p'>
                        Our software is designed with high accuracy and speed in mind, making it suitable for a variety of applications, 
                        including security, access control, and personalized marketing.
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
                <img src={f4} alt="" />
            </div>
            </Grid>
        </Grid>
</div>



{/* f5card */}

        <div className="f5div">
        <Grid container spacing={2}>

        <Grid item xs={12} sm={12} md={6}>
       <div className='f4img'>
        <img src={f5} alt="" />
       </div>
    </Grid>


    <Grid item xs={12} sm={12} md={6}>
    <div className='f4lcard'>
        <div>
            <div className='f4lcont'>
                <div className='f4l1t'>Identify intruders</div>
                <div className='faceh2text'>Say goodbye to guests</div>
                <div className='f4p'>Using a camera or video feed, Our software with its advanced computer vision algorithms can 
                detect human faces in real-time and track their movements, even in low-light conditions or partially obstructed views.
                 Once a face is detected, the software can compare it to a database of known faces to identify the individual or 
                 determine if it's a new face.
                </div>

                <div className='f4p'>
                Our software is designed with high accuracy and speed in mind, making it suitable for a variety of applications, 
                including security, access control, and personalized marketing.
                </div>

                <div>
                <div className='button1'>
                <div>Get the Product</div>
                </div>
                </div>
            </div>
        </div>
    </div>
    </Grid>

    
</Grid>
        </div>


        <div className="f6div">
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6}>
            <div className='f4lcard'>
                <div>
                    <div className='f4lcont'>
                        <div className='f4l1t'>Cutting edge AI</div>
                        <div className='faceh2text'>Experience unparalleled accuracy and speed</div>
                        <div className='f4p'>By leveraging advanced machine learning algorithms, the tool can detect faces even in challenging scenarios,
                         such as low lighting conditions or partial occlusions. Additionally,the AI-powered tool can distinguish between 
                         faces and other objects, ensuring that only faces are detected and analyzed. 
                        </div>

                        <div className='f4p'>
                        This level of accuracy and precision makes our face detection tool an invaluable asset 
                        for a wide range of applications, from security and surveillance to marketing and entertainment.
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
                <img src={f6} alt="" />
            </div>
            </Grid>
        </Grid>

        </div>

{/* This below code is from Four page  */}

        <div className='footer-img1'>
{/* <img src={footer} alt="" /> */}
<div className='centerfooter1'>

      <h2 style={{textAlign:'center'}}>Interested in our product?</h2>
      {/* <h2>Let's make it a reality</h2> */}
      <div className='btn4center1'>
      <div className='buttonIcon1'>
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

export default Face

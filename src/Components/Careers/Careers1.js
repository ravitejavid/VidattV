import React from 'react'
import './Careers.css'
import { Accordion, AccordionDetails, AccordionSummary, Avatar, Grid, Typography,Button } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import FooterNav from '../FooterNav';


function Careers1() {
  return (
    <div>
      <div className='car1'>
          <div>
            <div className='carfz' style={{textAlign:'center'}}>Join Our team at Vidatt</div>

            <div className='boxp1'>Our company values diversity, creativity,
                 and teamwork, and we are committed to 
                 {/* <div className='boxp1'> */}
                  providing our employees
                  with the resources and support they need to succeed.
            </div>
          </div>
      </div>

<div style={{background:'#EEF4FD'}}>

    <div className='carfz' style={{padding:'2% 0% 0% 3%'}}>Open Positions</div>
      <div className='completeAccordian'>
        <div>
        <div>
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color:'rgba(55, 48, 163, 1)'}}/>}
        >
            <div>
                <div style={{display:'flex'}}>
                <div className='acco'>Product designer</div>  
                    <div className='Vicon'>View job</div>    
                </div>
                               
          <div className='acc'>
            <div className='acc1'>
                <LocationOnOutlinedIcon /> 
                <div>Bangaluru</div>
            </div>
            <div className='acc1' style={{marginLeft:'30px'}}>
               <AccessTimeOutlinedIcon /> 
                <div>Full time</div>
            </div>
          </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={8}>
                <div className='inAccoFull'>
                    <div className='inAcco'>
                        <div className='inAcco1'>Job description</div>
                        <div>Our company values diversity, creativity,
                             and teamwork, and we are committed to providing 
                             our employees with the resources and support 
                             they need to succeed.</div>
                    </div>

                    <div className='inAcco'>
                        <div className='inAcco1'>Responsibilities</div>
                        <div>
                            <li>Our company values diversity, creativity, and teamwork, and we are committed to </li>
                            <li>Our company values diversity, creativity, and teamwork, and we are committed to </li>
                            <li>Our company values diversity, creativity, and teamwork, and we are committed to </li>
                            <li>Our company values diversity, creativity, and teamwork, and we are committed to </li>
                        </div>
                    </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={12} md={4}>
                   <div className='Accordiancard'>
                    <div>
                    <div>
                        <div className='carecardtitle'>Recruitment valid till</div>
                        <div style={{marginLeft:'15px'}}>12/04/22</div>
                    </div>

                        <div>
                        <div className='carecardtitle'>Hiring manager</div>
                        <div className='carecontent' style={{marginLeft:'15px'}}>
                            <Avatar />
                            <div style={{marginLeft:'15px'}}>krishna</div>
                        </div>
                    </div>
                       

                    <div>
                        <div className='carecardtitleholder'>
                        <div className='carecardtitle'>Job type</div>
                        <div className='carecardtitle'>Experience</div>
                        <div className='carecardtitle'>Location</div>
                        </div>

                       <div className='carecardtitleholder'>
                       <div style={{margin:'0 10px'}}>Full time</div>
                       <div style={{margin:'0 10px'}}>5+years</div>
                       <div style={{marginLeft:'15px'}}>Bengaluru</div>
                       </div>
                       
                    </div>

                    <div>
                        <div className='carecardtitle'>Salary</div>
                        <div style={{marginLeft:'15px'}}>5,45,000</div>
                    </div>

                  <div>
                    {/* <Button variant="contained" style={{marginLeft:'15px'}}>Apply</Button> */}
                    <button type="submit" className="button1" style={{border:'none'}}>
                  <div>Apply</div>
                </button>
                  </div>
                    </div>
                   </div>
              </Grid>
            </Grid>
          </Typography>
        </AccordionDetails>
      </Accordion>
        </div>
        </div>
      </div>

      {/* Accordian2 */}
      <div className='completeAccordian'>
        <div>
        <div>
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color:'rgba(55, 48, 163, 1)'}}/>}
        >
            <div>
                <div style={{display:'flex'}}>
                <div className='acco'>Backend software engineer</div>  
                    <div className='Vicon'>View job</div>    
                </div>
                               
          <div className='acc'>
            <div className='acc1'>
                <LocationOnOutlinedIcon /> 
                <div>Bangaluru</div>
            </div>
            <div className='acc1' style={{marginLeft:'30px'}}>
               <AccessTimeOutlinedIcon /> 
                <div>Full time</div>
            </div>
          </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={8}>
                <div className='inAccoFull'>
                    <div className='inAcco'>
                        <div className='inAcco1'>Job description</div>
                        <div>Our company values diversity, creativity,
                             and teamwork, and we are committed to providing 
                             our employees with the resources and support 
                             they need to succeed.</div>
                    </div>

                    <div className='inAcco'>
                        <div className='inAcco1'>Responsibilities</div>
                        <div>
                            <li>Our company values diversity, creativity, and teamwork, and we are committed to </li>
                            <li>Our company values diversity, creativity, and teamwork, and we are committed to </li>
                            <li>Our company values diversity, creativity, and teamwork, and we are committed to </li>
                            <li>Our company values diversity, creativity, and teamwork, and we are committed to </li>
                        </div>
                    </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={12} md={4}>
                   <div className='Accordiancard'>
                    <div>
                    <div>
                        <div className='carecardtitle'>Recruitment valid till</div>
                        <div style={{marginLeft:'15px'}}>12/04/22</div>
                    </div>

                        <div>
                        <div className='carecardtitle'>Hiring manager</div>
                        <div className='carecontent' style={{marginLeft:'15px'}}>
                            <Avatar />
                            <div style={{marginLeft:'15px'}}>krishna</div>
                        </div>
                    </div>
                       

                    <div>
                        <div className='carecardtitleholder'>
                        <div className='carecardtitle'>Job type</div>
                        <div className='carecardtitle'>Experience</div>
                        <div className='carecardtitle'>Location</div>
                        </div>

                       <div className='carecardtitleholder'>
                       <div style={{margin:'0 10px'}}>Full time</div>
                       <div style={{margin:'0 10px'}}>5+years</div>
                       <div style={{marginLeft:'15px'}}>Bengaluru</div>
                       </div>
                       
                    </div>

                    <div>
                        <div className='carecardtitle'>Salary</div>
                        <div style={{marginLeft:'15px'}}>5,45,000</div>
                    </div>

                  <div>
                    <Button variant="contained" style={{marginLeft:'15px'}}>Apply</Button>
                  </div>
                    </div>
                   </div>
              </Grid>
            </Grid>
          </Typography>
        </AccordionDetails>
      </Accordion>
        </div>
        </div>
      </div>

      {/* Acc3 */}
      <div className='completeAccordian'>
        <div>
        <div>
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color:'rgba(55, 48, 163, 1)'}}/>}
        >
            <div>
                <div style={{display:'flex'}}>
                <div className='acco'>Assistant software engineer</div>  
                    <div className='Vicon'>View job</div>    
                </div>
                               
          <div className='acc'>
            <div className='acc1'>
                <LocationOnOutlinedIcon /> 
                <div>Bangaluru</div>
            </div>
            <div className='acc1' style={{marginLeft:'30px'}}>
               <AccessTimeOutlinedIcon /> 
                <div>Full time</div>
            </div>
          </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={8}>
                <div className='inAccoFull'>
                    <div className='inAcco'>
                        <div className='inAcco1'>Job description</div>
                        <div>Our company values diversity, creativity,
                             and teamwork, and we are committed to providing 
                             our employees with the resources and support 
                             they need to succeed.</div>
                    </div>

                    <div className='inAcco'>
                        <div className='inAcco1'>Responsibilities</div>
                        <div>
                            <li>Our company values diversity, creativity, and teamwork, and we are committed to </li>
                            <li>Our company values diversity, creativity, and teamwork, and we are committed to </li>
                            <li>Our company values diversity, creativity, and teamwork, and we are committed to </li>
                            <li>Our company values diversity, creativity, and teamwork, and we are committed to </li>
                        </div>
                    </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={12} md={4}>
                   <div className='Accordiancard'>
                    <div>
                    <div>
                        <div className='carecardtitle'>Recruitment valid till</div>
                        <div style={{marginLeft:'15px'}}>12/04/22</div>
                    </div>

                        <div>
                        <div className='carecardtitle'>Hiring manager</div>
                        <div className='carecontent' style={{marginLeft:'15px'}}>
                            <Avatar />
                            <div style={{marginLeft:'15px'}}>krishna</div>
                        </div>
                    </div>
                       

                    <div>
                        <div className='carecardtitleholder'>
                        <div className='carecardtitle'>Job type</div>
                        <div className='carecardtitle'>Experience</div>
                        <div className='carecardtitle'>Location</div>
                        </div>

                       <div className='carecardtitleholder'>
                       <div style={{margin:'0 10px'}}>Full time</div>
                       <div style={{margin:'0 10px'}}>5+years</div>
                       <div style={{marginLeft:'15px'}}>Bengaluru</div>
                       </div>
                       
                    </div>

                    <div>
                        <div className='carecardtitle'>Salary</div>
                        <div style={{marginLeft:'15px'}}>5,45,000</div>
                    </div>

                  <div>
                    <Button variant="contained" style={{marginLeft:'15px'}}>Apply</Button>
                  </div>
                    </div>
                   </div>
              </Grid>
            </Grid>
          </Typography>
        </AccordionDetails>
      </Accordion>
        </div>
        </div>
      </div>


      {/* Acc4 */}

      <div className='completeAccordian'>
        <div>
        <div>
        <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color:'rgba(55, 48, 163, 1)'}}/>}
        >
            <div>
                <div style={{display:'flex'}}>
                <div className='acco'>Flutter developer</div>  
                    <div className='Vicon'>View job</div>    
                </div>
                               
          <div className='acc'>
            <div className='acc1'>
                <LocationOnOutlinedIcon /> 
                <div>Bangaluru</div>
            </div>
            <div className='acc1' style={{marginLeft:'30px'}}>
               <AccessTimeOutlinedIcon /> 
                <div>Full time</div>
            </div>
          </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={8}>
                <div className='inAccoFull'>
                    <div className='inAcco'>
                        <div className='inAcco1'>Job description</div>
                        <div>Our company values diversity, creativity,
                             and teamwork, and we are committed to providing 
                             our employees with the resources and support 
                             they need to succeed.</div>
                    </div>

                    <div className='inAcco'>
                        <div className='inAcco1'>Responsibilities</div>
                        <div>
                            <li>Our company values diversity, creativity, and teamwork, and we are committed to </li>
                            <li>Our company values diversity, creativity, and teamwork, and we are committed to </li>
                            <li>Our company values diversity, creativity, and teamwork, and we are committed to </li>
                            <li>Our company values diversity, creativity, and teamwork, and we are committed to </li>
                        </div>
                    </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={12} md={4}>
                   <div className='Accordiancard'>
                    <div>
                    <div>
                        <div className='carecardtitle'>Recruitment valid till</div>
                        <div style={{marginLeft:'15px'}}>12/04/22</div>
                    </div>

                        <div>
                        <div className='carecardtitle'>Hiring manager</div>
                        <div className='carecontent' style={{marginLeft:'15px'}}>
                            <Avatar />
                            <div style={{marginLeft:'15px'}}>krishna</div>
                        </div>
                    </div>
                       

                    <div>
                        <div className='carecardtitleholder'>
                        <div className='carecardtitle'>Job type</div>
                        <div className='carecardtitle'>Experience</div>
                        <div className='carecardtitle'>Location</div>
                        </div>

                       <div className='carecardtitleholder'>
                       <div style={{margin:'0 10px'}}>Full time</div>
                       <div style={{margin:'0 10px'}}>5+years</div>
                       <div style={{marginLeft:'15px'}}>Bengaluru</div>
                       </div>
                       
                    </div>

                    <div>
                        <div className='carecardtitle'>Salary</div>
                        <div style={{marginLeft:'15px'}}>5,45,000</div>
                    </div>

                  <div>
                    <Button variant="contained" style={{marginLeft:'15px'}}>Apply</Button>
                  </div>
                    </div>
                   </div>
              </Grid>
            </Grid>
          </Typography>
        </AccordionDetails>
      </Accordion>
        </div>
        </div>
      </div>
    </div>

    <FooterNav />
    </div>
  )
}

export default Careers1

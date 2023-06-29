import React, { useState } from 'react'
import { NavLink ,Link} from "react-router-dom";
import './Navbar.css'
import vidatt from '../imgs/vid1.svg'
import dropHicon from '../imgs/dropHicon.svg'
import { useLocation } from 'react-router-dom';
import { Box, Drawer, Stack, Typography,Button } from '@mui/material';



function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };
    const [click, setClick] = useState(false);
   const useLoc = useLocation()
    const handleClick = () => setClick(!click);
    const Close = () => setClick(false);

    
  return (
    <div>
      {/*  <div className={(useLoc.pathname === '/login' || useLoc.pathname === '/') ? 'login-one button-highlite' : 'login-one'}> */}
    <div>
     <div className={click ? "main-container" : ""}  onClick={()=>Close()} />
      <nav className="navbar" onClick={e => e.stopPropagation()}>
      
        <div id="nav-container" className={(useLoc.pathname === '/') ? 'color1' : 'color2'}>
          <NavLink exact to="/" className="nav-logo">
            <img src={vidatt} alt="" />
            {/* <i className="fa fa-code"></i> */}
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">

            
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className={(useLoc.pathname === '/about') ? 'actAbout' : 'nav-links'}
                // className=""
                onClick={click ? handleClick : null}
              >
                AboutUs
              </NavLink>
             
            </li>
            <li className="nav-item">
           
              <li className="dropdown ">
                <NavLink 
                    className={(useLoc.pathname === '/face' || useLoc.pathname === '/trf' ) ? 'actAbout' : 'nav-links'}
                  activeClassName="active"
           
                  onClick={click ? handleClick : null}
                >Our Products
                
                <div className="dropdown-content">
                  <Link to="/face">
                    <div className='dropflex'>
                      <div className='droptext'> Face recognition software</div>
                      <div className='dropHimg'> <img src={dropHicon} alt="" /> </div>
                    </div>
                    </Link>

                    <Link to="/trf">
                    <div className='dropflex'>
                      <div className='droptext'> Drone inspection software</div>
                      <div className='dropHimg'> <img src={dropHicon} alt="" /> </div>
                    </div>
              
                    
                    </Link>

                    <Link to="/trf">
                    <div className='dropflex'>
                      <div className='droptext'> Traffic management system</div>
                      <div className='dropHimg'> <img src={dropHicon} alt="" /> </div>
                    </div>
                    </Link>
                   
                </div>
                
                </NavLink>

               
              </li>
           
            
            </li>
           
            <li className="nav-item">
              <NavLink
                exact
                to="/Careers"
                activeClassName="active"
                className={(useLoc.pathname === '/Careers') ? 'actAbout' : 'nav-links'}
                onClick={click ? handleClick : null}
              >
                Careers
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className={(useLoc.pathname === '/contact') ? 'actAbout' : 'nav-links'}
               onClick={click ? handleClick : null}
              >
                ContactUs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
               onClick={click ? handleClick : null}
              >
                Get a demo
              </NavLink>
            </li>
            {/* <div className="hoverdiv">
                  <div>
                    <div>FEATURED</div>
                    <div>Face recognition software</div>
                    <div>Know who's who in an instant with our powerful face recognition tool.</div>
                    <img src="" alt="Face" />
                    <Button>ksdsd</Button>
                  </div>
                </div> */}
          </ul>

          {/* <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div> */}
          <div className='Drawrbox-one'>
          <Box>
    <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
    <Drawer aria-label='muiDrawer' className='drawerBox'
     anchor='top' open={click}
      onClose={()=>setClick(false)} >

<Stack width={200} height={370} spacing={2} sx={{marginTop:'5%'}}>
  <Typography variant='div' >
     <div className='drawerdiv'>
      <NavLink
                exact
                to="/about" className={(useLoc.pathname === '/about') ? 'actAbout' : 'nav-links'}>
          AboutUs
      </NavLink>
      {/* <NavLink 
                    
                  activeClassName="active">
      <li class="dropdown">
      <a href="#" className={(useLoc.pathname === '/face' || useLoc.pathname === '/trf' ) ? 'actAbout' : 'nav-links'}>Our Products</a>
      <ul class="dropdown-content">
        <li><Link to="/face">Face recognition software</Link></li>
        <li><Link to="/trf">Drone inspection software</Link></li>
        <li><Link to="/trf">Traffic management system</Link></li>
      </ul>
    </li>
      </NavLink> */}
       <li className="dropdown ">
                <NavLink 
                    className={(useLoc.pathname === '/face' || useLoc.pathname === '/trf' ) ? 'actAbout' : 'nav-links'}
                  activeClassName="active"
           
                  onClick={click ? handleClick : null}
                >Our Products
                
                <div className="dropdown-content">
                  <Link to="/face">
                    <div className='dropflex'>
                      <div className='droptext'> Face recognition software</div>
                      <div className='dropHimg'> <img src={dropHicon} alt="" /> </div>
                    </div>
                    </Link>

                    <Link to="/trf">
                    <div className='dropflex'>
                      <div className='droptext'> Drone inspection software</div>
                      <div className='dropHimg'> <img src={dropHicon} alt="" /> </div>
                    </div>
              
                    
                    </Link>

                    <Link to="/trf">
                    <div className='dropflex'>
                      <div className='droptext'> Traffic management system</div>
                      <div className='dropHimg'> <img src={dropHicon} alt="" /> </div>
                    </div>
                    </Link>
                
                </div>
               
                </NavLink>
              </li>
{/* dropdown ends hear */}
      <NavLink
                exact
                to="/Careers"
                className={(useLoc.pathname === '/Careers') ? 'actAbout' : 'nav-links'}>Careers</NavLink>

      <NavLink
                exact
                to="/contact"
                className={(useLoc.pathname === '/contact') ? 'actAbout' : 'nav-links'}>ContactUs</NavLink>

     </div>
  </Typography>
</Stack>
    </Drawer>
    </Box>
          </div>
           
        </div>
      </nav>

    
    </ div>

  
    </div>
  )
}

export default Navbar

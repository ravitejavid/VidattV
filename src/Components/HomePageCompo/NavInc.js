import React from "react";
import Grid from "@mui/material/Grid";
import "./NavInc.css";
import one from "../../imgs/one.png";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useTypewriter} from 'react-simple-typewriter'

function NavInc() {
  const [text] = useTypewriter({
    words:['Artificial Intelligence','Machine learning','Data visualization'],
    loop:{},
    typeSpeed:10,
    deleteSpeed:10,

})
  return (
    <div>
      <Grid
        container
        sx={{ background: "rgba(226, 235, 254, 1)", width: "100%" }}
      >
        <Grid sm={12} md={7} sx={{ width: "100%" }}>
          <div className="navinc1">
            {/* animation starts here */}
            <div className="animatiobody">
              <div className="static-txt">Crafting Next Gen Solutions</div>

              <div className="containerNic">
                <div style={{marginRight:'1%'}}>
                  <span className="first-text">Leveraging  </span>
                </div>
             
              
      <div className="sec-text">
        {text}
        {/* <a style={{color:'red'}}>|</a> */}
      </div>
      
   
    
              </div>
              
     
              <div className="combutton1">
                <p className="headerContent">
                We are a next-generation AI company with high-accuracy real-time Video Inference solutions,
                 creating products and solutions with highest accuracy and flexible deployment models.
                </p>
              </div>

              <div className="combutton1">
                <div className="button1">
                  <div>Get a demo</div>
                  <ArrowForwardIcon />
                </div>
              </div>
            </div>
          </div>
        </Grid>

        <Grid item sm={12} md={5}>
          <div className="navimg1">
            <div>
              {" "}
              <img src={one} alt="" />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default NavInc;

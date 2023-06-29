import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import './Carosel.css'
import Mycard from './Mycard';
const Imagecarousel = () => {
    let box = document.querySelector('.product-container');

    const btnpressprev = () => {
        let box = document.querySelector(".product-container");
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft - width;
        console.log(width);
      };

      const btnpressnext = () => {
        let box = document.querySelector(".product-container");
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft + width;
        console.log(width);
      };
    return (
        <div className="product-carousel">

            <div className='carosel-button' >
                <div className='card1title'>
                    Our Products
                </div>
                <div style={{display:'flex'}}>
                <div className="pre-btn" onClick={btnpressprev}><ArrowForwardIcon/> </div>
            <div className="next-btn" onClick={btnpressnext} style={{marginLeft:'10px'}} ><ArrowBackIcon/> </div>
                </div>
           
            </div>
            


            <div className="product-container">
                <Mycard />
               
            </div>
        </div>
    )
}

export default Imagecarousel
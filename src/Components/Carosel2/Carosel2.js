import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import './Carosel2.css'
import Card2 from './Card2';
const Imagecarousel = () => {
    let box = document.querySelector('.product-container1');

    const btnpressprev1 = () => {
        let box = document.querySelector(".product-container1");
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft - width;
        console.log(width);
      };

      const btnpressnext1 = () => {
        let box = document.querySelector(".product-container1");
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft + width;
        console.log(width);
      };
    return (
        <div className="product-carousel1"  style={{backgroundColor:'#FFF3DB'}}>

            <div className='carosel-button1' >
                <div className='cardstitle'>
                    Customer stories
                </div>
                <div style={{display:'flex'}}>
                <button className="pre-btn1" onClick={btnpressprev1}><ArrowForwardIcon/> </button>
            <button className="next-btn1" onClick={btnpressnext1} style={{marginLeft:'10px'}} ><ArrowBackIcon/> </button>
                </div>
           
            </div>
            


            <div className="product-container1">
                <Card2 />
               
            </div>
        </div>
    )
}

export default Imagecarousel
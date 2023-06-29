import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './Carosel3.css'
import Card3 from './Card3';

function Carosel3() {
    let box = document.querySelector('.product-container2');

    const btnpressprev2 = () => {
        let box = document.querySelector(".product-container2");
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft - width;
        console.log(width);
      };

      const btnpressnext2 = () => {
        let box = document.querySelector(".product-container2");
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft + width;
        console.log(width);
      };
  return (
    <div className="product-carousel2" >

    <div className='carosel-button2' >
        <div className='cardtitle2'>
           Our Founders
        </div>
        <div style={{display:'flex'}}>
        <button className="pre-btn2" onClick={btnpressprev2}><ArrowForwardIcon/> </button>
    <button className="next-btn2" onClick={btnpressnext2} style={{marginLeft:'10px'}} ><ArrowBackIcon/> </button>
        </div>
   
    </div>
    


    <div className="product-container2">
        <Card3 />
       
    </div>
</div>
  )
}

export default Carosel3

import React from 'react'

import C1 from '../../imgs/Caro/C1.png'
import C2 from '../../imgs/Caro/c2.png'
import CC1 from '../../imgs/Caro/cc1.png'
import CC2 from '../../imgs/Caro/cc2.png'
import CC3 from '../../imgs/Caro/cc3.png'
import Avatar from '@mui/material/Avatar';
import './Carosel2.css'

const productData = [
    {
      id: 1,
      profile:C1,
      Name:"Yusuke lzumi",
      company:'Global CTO',
      Logo:CC1,
      description: "Vidatt is our trusted software development partner in India for highly specialized projects. We have so far had an excellent experience as their customer and they have always delivered what they promised, on time and with highly satisfactory quality. We value our continued relationship with Vidatt and highly recommend them as a specialized and reliable software development outfit.",
     
    },
    {
      id: 2,
      profile:C2,
      Name:'Hadas Shatz-Azoulay',
      company:'COO, and Co-Founder',
      Logo:CC2,
      description: "Working with Vidatt has enabled us to bring the concept of our business to life. Their ability to create and implement complex color recognition algorithms and overcome obstacles in a highly professional yet cost effective manner has been key to our initial success. In addition, the reliability and professionality of their team has given us the confidence to grow our business",
    },
    {
      id: 3,
      profile:C1,
      Name:'Yusuke lzumi',
      company:'Global CTO',
      Logo:CC3,
      description: "Vidatt is our trusted software development partner in India for highly specialized projects. We have so far had an excellent experience as their customer and they have always delivered what they promised, on time and with highly satisfactory quality. We value our continued relationship with Vidatt and highly recommend them as a specialized and reliable software development outfit.",
    },
    
   
  ];
  
function Card2() {
  return (
    <div>
           <div style={{display:'flex',width:'100vw'}} className='cardholder'>
         {productData.map((item) =>(
             
<div className="cardcaro1">
     
     <div className="cardTopcaro1">
       <div>

       <div className="Card-heardercaro1">
           <Avatar alt="Remy Sharp" src={item.profile} className="PAva1"/>
        <div className="profile-det">
           <div className="Pnamec1">{item.Name}</div>
           <div className="Pcompc1">{item.company}</div>
        </div>
       </div>
       
       </div>

       <div>
           <div className="descscroolc1">
           <div className="Pdesc">{item.description}</div>
           </div>
         
       </div>

       <div>
           <div>
           <img src={item.Logo} alt="" />
           </div>
           
       </div>
      
     </div>
    
   </div>
         
        ) )}
    </div>
    </div>
  )
}

export default Card2

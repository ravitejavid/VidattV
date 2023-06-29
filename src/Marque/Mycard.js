import React from 'react'
import "./Mycard.css"
import carso1 from '../../src/imgs/carso.png'
import caros2 from '../../src/imgs/carso1.png'

const img =[
    {
      id:1,
      src:carso1,
      className:' mycard bg-color',
      title:'Face recognition Softwares',
      content:"Know who's who in an instant with our powerful face recognition tool.",
     
    },
    {
      id:2,
      src:caros2,
      className:'mycard bg-color1',
      title:'Drone inspection software',
      content:"Say goodbye to manual inspections and hello to effortless inspections with our drone technology",
    },
    {
      id:3,
      src:carso1,
      className:'mycard bg-color2',
      title:'Traffic management system',
      content:"Revolutionize your number plate recognition process with just a click.",
    },
    {
      id:4,
      src:caros2,
      className:'mycard bg-color3',
      title:'Face recognition Software',
      content:"Know who's who in an instant with our powerful face recognition tool.",
    },
   
   
  ]
const Mycard = ({card2}) => {
    return (
      <div>
        <div style={{display:'flex'}} className='cardholder'>
            {img.map((item) =>(
              <div className='cardiv'>
        <div className={item.className}>
         <img src={item.src}  />
      <div className="card-content">
        {/* <h3>{title}</h3> */}
        <p></p>
      </div>

          <p></p>
           </div>

           <div className='center down'>
            <div className='card1title'>{item.title}</div>
            <div className='card1content'>
              {item.content}
            </div>
           </div>
           </div>

         
        ) )}
          
        </div>
        </div>
        
     
   
    )
}

export default Mycard
import React from 'react'
import kiran from  '../../../imgs/Caro/kiran.jpg'
import male from  '../../../imgs/Caro/male.jpg'

import female from  '../../../imgs/Caro/female.png'

const staff = [
    {
      id: 1,
      profile:kiran,
      Name:"Kiran",
      role:'Founder,CEO',
    },
    {
      id: 2,
      profile:male,
      Name:"Naveen",
      role:'Developer',
    
    },
    {
      id: 3,
      profile:male,
      Name:"Rahul",
      role:'Developer',
     
    },
    {
        id: 4,
        profile:male,
        Name:"Nikhil",
        role:'Developer',
       
      },

      {
        id: 5,
        profile:male,
        Name:"Pream",
        role:'Developer',
       
      },
      {
        id: 6,
        profile:male,
        Name:"Abishak",
        role:'Developer',
       
      },
      {
        id: 7,
        profile:male,
        Name:"Ravi",
        role:'Developer',
       
      },
      {
        id: 8,
        profile:male,
        Name:"Akash",
        role:'Developer',
       
      },
      {
        id: 9,
        profile:female,
        Name:"Disha",
        role:'Developer',
       
      },
      {
        id: 10,
        profile:male,
        Name:"Sai ",
        role:'UI/UX Designer',
       
      },
   
  ];

function Card3() {
  return (
    <div style={{display:'flex',gap:'1em'}}>
      {
        staff.map((item)=>(
            <div className="EmpCard">
            <div className="EmpImg">
                <img src={item.profile} alt="Vidatt Staff" />
            </div>

            <div className='Empdetails'>
                <div className='EmpName'>{item.Name}</div>
                <div className='EmpRole'>{item.role}</div>

            </div>
    
          </div>
        ))
      }
    
    </div>
  )
}

export default Card3

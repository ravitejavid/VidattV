import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Silkcard.css'
import kiran from'../../../imgs/Caro/kiran.jpg'
import female from'../../../imgs/Caro/female.png'
import male from'../../../imgs/Caro/male.jpg'
function Silk1() {
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            id='twoArrow'
            // style={{ ...style,
            //      display: "block",
            //      background:'white',
            // padding:'5px',
            //       borderRadius:'50%',
            //       position:'relative',bottom:'30px',right:'3%'}}
            onClick={onClick}
          />
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            id='onearrow'
            // style={{ ...style, display: "block", background: "white",
            // padding:'5px',
            // borderRadius:'50%',
            
            // position:'relative',top:'-30px',left:'90%' }}
            onClick={onClick}
          />
        );
      }
    const settings = {
        // dots: true,
        dots: false,
        infinite: false,
        // infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
      const staff = [
        {
          id: 1,
          profile:kiran,
          Name:"Kiran Kannappan",
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
            Name:"Nikhil Gowtham",
            role:'Developer',
           
          },
    
          {
            id: 5,
            profile:male,
            Name:"Prem",
            role:'Developer',
           
          },
          {
            id: 6,
            profile:male,
            Name:"Abhishak",
            role:'Developer',
           
          },
          {
            id: 7,
            profile:male,
            Name:"Ravi teja",
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
            Name:"Disha Shanbhag",
            role:'Developer',
           
          },
          {
            id: 10,
            profile:male,
            Name:"Sai Praveen",
            role:'UI/UX Designer',
           
          },
       
      ];
  return (
    <div className='silkfull-stp'>
<div>
<div className='cardtitle2'>
           Our Founders
        </div>
        <Slider {...settings} className='allEmpcards'>
        {/* <div style={{display:'flex',gap:'1em'}}> */}
        {
        staff.map((item)=>(
        
            <div className="EmpCard-silk">
            <div className="EmpImg-s">
                <img src={item.profile} alt="Vidatt Staff" />
            </div>

            <div className='Empdetails-s'>
                <div className='EmpName-s'>{item.Name}</div>
                <div className='EmpRole-s'>{item.role}</div>

            </div>
    
          </div>
        ))
      }
      {/* </div> */}
        </Slider>
      </div>
    </div>
  )
}

export default Silk1

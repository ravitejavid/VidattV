import React from 'react'
import Carousel from '../../Marque/Carosel'
//import Marque from '../../Marque/Marque'
import NavInc from './NavInc'
import Three from './Three'
import Four from './Four'
import FooterNav from '../FooterNav'
import Navbar from '../Navbar'
// import Typewriter from './Typewriter'
// import Caromain from '../CaroImp/Caromain'




function Homepage() {
  return (
    <div className="App">
{/* <Typewriter />  */}
    {/* <h1>React multi carousel</h1> */}
{/* 
    <Marque /> */}
    <div style={{background:"rgba(226, 235, 254,1)"}}>
    <Navbar />
    {/* */}
    </div>
{/* <Caromain /> */}
    <NavInc />
    <Carousel />
    <Three />
    <Four />

    <FooterNav />
    {/* <Marque /> */}
  </div>
  )
}

export default Homepage


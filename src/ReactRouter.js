import React from 'react'
import {Route,Routes} from "react-router-dom"
import Navbar from './Components/Navbar'
import AboutUs from '../src/Components/Pages/AboutUs'
import Products from './Components/Pages/Products'
import Careers from './Components/Pages/Careers'
import ContactUs from './Components/Pages/ContactUs'
import Homepage from './Components/HomePageCompo/Homepage'
import Face from './Components/OurProducts/Face'
import Traffic from './Components/OurProducts/Traffic'
import Map from './Map'
function ReactRouter() {
  return (
    <div>
     
      
        <Routes>  
          <Route exact path='/' element={<Homepage />} />
          <Route exact path='/about' element={<AboutUs /> } />
          {/* <Route exact path='/product' element={<Products/>} /> */}
          <Route exact path='/Careers' element={<Careers />} />
          <Route exact path='/contact' element={<ContactUs />} />
          <Route exact path='/face' element={<Face />} />
          <Route exact path='/trf' element={<Traffic />} />
          
         <Route exact path='/map' element={<Map />} />
         
        </Routes>
    </div>
  )
}

export default ReactRouter

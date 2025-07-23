import React, { useEffect } from 'react'
import Navbar from './components/navbar'
import Herosection from './sections/Herosection'
import gsap from 'gsap'
import { ScrollSmoother, ScrollTrigger } from 'gsap/all'
import Messagesection from './sections/Messagesection'
import Flavorsection from './sections/Flavorsection'
import { useGSAP } from '@gsap/react'
import Nutrition from './sections/Nutrition'

gsap.registerPlugin(ScrollTrigger,ScrollSmoother)

function App() {
 useGSAP(()=>{
  ScrollSmoother.create({
    smooth:3,
    effects:true,
  })
 })
  return (
    <div className=''>
      <Navbar/>
        <div id="smooth-wrapper">
          <div id="smooth-content">
              <Herosection/>
              <Messagesection/>
              <Flavorsection/>
              <Nutrition/>
          </div>
          </div>
    </div>
  )
}

export default App
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { SplitText } from 'gsap/all';
import React from 'react'

function FlavorTitle() {
  useGSAP(()=>{ 
    const firstTextSplit =SplitText.create('.first-text-split',{
      type:"chars",
    });
    const secondTextSplit=SplitText.create('.second-text-split',{
      type:"chars",
    })
    gsap.from(firstTextSplit.chars,{
      yPercent:300,
      duration:1,
      stagger:0.02,
      ease:"power4.out",

      scrollTrigger:{
        trigger:".first-text-split",
        start:"top 60%",

      }
    })

    gsap.from(".flavor-text-scroll",{
      clipPath:"polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
      duration:1,
      ease:"circ.inOut",
      scrollTrigger:{
        trigger:".flavor-text-scroll",
        start:"top 60%"
      }
    })

    gsap.from(secondTextSplit.chars,{
      yPercent:300,
      duration:0.91,
      stagger:0.02,
      ease:"power4.Out",
     
      scrollTrigger:{
        trigger:".second-text-split",
        start:"top 60%",
        
      }
    })

  })
  return (
    <div className='general-title col-center h-full 2xl:gap-32 xl:gap-24 gap-16'>
      <div className='overflow-hidden 2xl:py-0 py-3 first-text-split'>
        <h1>
          we have 6
        </h1>
      </div>
      <div style={{
        clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
       
      }} className='flavor-text-scroll'>
        <div className='bg-mid-brown pb-5 2xl:pt-0 pt-3 2xl:px-5 px-3'>
          <h2 className='text-milk'>Freaking</h2>
        </div>
      </div>
      <div className='overflow-hidden 2xl:py-0 py-3 second-text-split'>
        <h1>
          delecious flavors
        </h1>
      </div>
    </div>
  )
}

export default FlavorTitle
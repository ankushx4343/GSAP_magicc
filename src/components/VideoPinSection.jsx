import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { useMediaQuery } from 'react-responsive'

function VideoPinSection() {

    const isMobile=useMediaQuery({
        query:"(max-width:768px)",
    })

    useGSAP(()=>{
        if(!isMobile){
            const tl=gsap.timeline({
                scrollTrigger:{
                    trigger:".vd-pin-section",
                    start:"-15% top",
                    end:"200% top",
                    scrub:1.5,
                    pin:true,
                 
                }
            })
    
            tl.to(".video-box",{
                clipPath:"circle(50% at 50% 50%)",
                ease:"power1.in",
    
            })
        }
    })

  return (
    <section className='vd-pin-section'>
        <div style={{ clipPath:isMobile? "circle(100% at 50% 50%)":"circle(12% at 50% 50%)" }} className='size-full video-box'>
            <video src='\videos\pin-video.mp4' playsInline loop muted autoPlay></video>
            <div className='abs-center md:scale-100 scale-200'>
                <img src='\images\circle-text.svg' alt='circle' className='spin-circle'></img>
                <div className='play-btn'>
                    <img src='\images\play.svg' className='size-[3vw] ml-[.5vw]'></img>
                </div>
            </div>
        </div>
    </section>
  )
}

export default VideoPinSection
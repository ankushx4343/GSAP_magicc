import React, { useRef } from 'react'
import { cards } from '../constants'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function TestimonialsSection() {
    const vidRef=useRef([]);
    const handlePlay=(index)=>{
       const video=vidRef.current[index]
       video.play();
    }

    const handlePause=(index)=>{
        const video=vidRef.current[index]
        video.pause();
    }

    useGSAP(()=>{
        gsap.set(".testimonials-section",{
            marginTop:"-140vh"
        })

        const tl=gsap.timeline({
            delay:1,
            scrollTrigger:{
                trigger:".testimonials-section",
                start:"top bottom",
                end:"200% top",
                scrub:true
            }
        })
        tl.to(".first-title",{
            xPercent:"70",
            ease:"power1.inOut",
            duration:1,
        }).to(".sec-title",{
            xPercent:"25",
            ease:"power1.inOut",
            duration:1
        },"<").to(".third-title",{
            xPercent:-50,
            ease:"power1.inOut",
            duration:1,
        },"<")

        const pinTL=gsap.timeline({
            scrollTrigger:{
                trigger:".testimonials-section",
                start:"10% top",
                end:"200% top",
                pin:true,
                scrub:true
            }
        })

        pinTL.from(".vd-card",{
            yPercent:150,
            stagger:0.2,
            ease:"power1.inOut"
        })
    })
  return (
    <section className=' testimonials-section h-[150vh]'>
        <div className='absolute size-full flex flex-col items-center pt-[5vw] h-full'>
            <h1 className='text-black first-title'>what's</h1>
            <h1 className='text-light-brown sec-title'>Everyone</h1>
            <h1 className='text-black third-title'>talking</h1>
        </div>

        <div className='pin-box'>
            {cards.map((card,key)=>{
                return(
                <div key={key} className={`vd-card ${card.translation} ${card.rotation}`}
                onMouseEnter={()=>handlePlay(key)}
                onMouseLeave={()=>handlePause(key)}
                >
                    <video
                    ref={(ele)=>vidRef.current[key]=ele}
                    src={card.src}
                    playsInline
                    loop
                    muted
                    className='size-full object-cover'>    
                    </video>
                </div>)
            })}
        </div>
    </section>
  )
}

export default TestimonialsSection